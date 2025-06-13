import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../firebase"; // 🔁 Adjust path

function Register() {
  const [role, setRole] = useState("patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ role, name, email, password });
    // TODO: Create user with email & password (if needed)
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google Signup Success:", {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        role,
      });

      // Optionally: Send to backend to create user record with selected role
      navigate("/dashboard"); // 👈 redirect as needed
    } catch (error) {
      console.error("Google Signup Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="max-w-md w-full bg-neutral-900 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Your Account
        </h2>

        {/* Role Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          {["patient", "doctor"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${role === r ? "bg-blue-600 text-white" : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"}`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-between">
          <span className="border-t w-1/4 border-gray-600"></span>
          <span className="text-gray-400 text-sm">OR</span>
          <span className="border-t w-1/4 border-gray-600"></span>
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border border-gray-600 py-2 rounded hover:bg-neutral-800 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm text-white font-semibold">
            Sign up with Google as {role}
          </span>
        </button>

        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
