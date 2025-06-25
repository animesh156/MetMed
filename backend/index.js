const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const colors = require("colors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const doctorRoutes = require("./routes/doctor");
const cookieParser = require("cookie-parser");
const appointmentRoute = require("./routes/appointment");
const adminRoutes = require("./routes/admin");
const patientRoutes = require("./routes/patient");

connectDB();

app.use(
  cors({
    origin: "https://met-med.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/appointment", appointmentRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/patient", patientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.cyan.underline);
});
