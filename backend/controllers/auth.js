const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const admin = require("../config/fireBaseAdmin");
const Doctor = require("../models/doctor");

const generateToken = (res, user) => {
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.cookie("jwt", token, {
    httpOnly: true, // cookie can't be accessed by document.cookie protects from XSS attack
    secure: process.env.NODE_ENV === "production", //Cookie is sent only over HTTPS.
    sameSite: "None", // Controls whether cross-site cookies are allowed.
    // sameSite: "Lax", // for DEV,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

//  @desc Register a new user
//  @route POST /api/auth/register
//  @access Public

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (role === "admin") {
      return res
        .status(401)
        .json({ message: "You are not allowed to create admin users" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (role === "doctor") {
      await Doctor.create({
        doctorId: user._id, // only this field for now
      });
    }

    if (user) {
      generateToken(res, user);

      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      return res.status(500).json({ message: "User creation failed" });
    }
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Login a user
// @route POST /api/auth/login
// @access Public

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    generateToken(res, user);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};

const firebaseLogin = async (req, res) => {
  const { token, role } = req.body;

  try {
    if (!token) {
      return res.status(400).json({ error: "Firebase token is required" });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    const { email, name } = decoded;

    if (!email) {
      return res.status(400).json({ error: "Invalid Firebase token" });
    }

    //  Check if user already exists in DB
    let user = await User.findOne({ email });

    if (!user) {
      //  If not, create one

      // 🔢 Generate 5-digit random password
      const rawPassword = Math.floor(10000 + Math.random() * 90000).toString();

      // 🔐 Hash it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(rawPassword, salt);

      user = await User.create({
        name,
        email,
        role,
        password: hashedPassword, // leave empty for Firebase
      });
    }

    generateToken(res, user);
    return res.status(200).json({
      message: "Login successful",
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    console.error("Firebase login error:", err);
    return res.status(401).json({ error: "Invalid or expired Firebase token" });
  }
};

// @desc Logout a user
// @route POST /api/auth/logout
// @access Public

const logOut = async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) }); // Clear the cookie
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  firebaseLogin,
  logOut,
};
