import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 🔥 ADD

  const handleLogin = async () => {
    try {
      await API.post("/auth/login", { email, password });

      alert("Login Successful");

      // 🔥 REDIRECT TO HOME
      navigate("/");

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative h-screen w-full">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/60"></div>

        {/* Login Box */}
        <div className="relative flex justify-center items-center h-full pt-20">

          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-sm w-full">

            <h2 className="text-2xl font-bold text-center mb-6">
              Welcome Back
            </h2>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 rounded-lg border outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-3 rounded-lg border outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              Login
            </button>

          </div>

        </div>
      </div>
    </>
  );
}