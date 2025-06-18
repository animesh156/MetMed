const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const colors = require('colors')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')

connectDB()

app.use(cors());
app.use(express.json())

app.use('/api/auth', authRoutes)
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.cyan.underline);
});
