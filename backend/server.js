const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
  res.send("App is running on port 5000 successfully");
})

app.use(cors({
  origin: ["https://real-estate-mu-cyan-92.vercel.app","http://localhost:5173"],
  methods:["POST","PUT","GET","DELETE","PATHCH"],
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);