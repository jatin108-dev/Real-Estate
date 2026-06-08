import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Account Created Successfully");

      navigate("/");
      window.location.reload();

    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message || "Error creating account"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative h-screen w-full">

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute w-full h-full object-cover"
          alt="background"
        />

        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/60"></div>

        {/* Form */}
        <div className="relative flex justify-center items-center h-full pt-20">

          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-sm w-full">

            <h2 className="text-2xl font-bold text-center mb-6">
              Create Account
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-3 rounded-lg border focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleRegister}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              Sign Up
            </button>

          </div>

        </div>
      </div>
    </>
  );
}