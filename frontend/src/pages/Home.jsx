import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search) return;
    navigate(`/listings?location=${search}`);
  };

  return (
    <>
      <Navbar />

      <div className="relative h-screen w-full">

        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full bg-black/50"></div>

        <div className="relative flex flex-col justify-center items-center h-full text-white pt-20">

          <h1 className="text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>

          <div className="flex gap-3 bg-white/90 p-3 rounded-xl">

            <input
              type="text"
              placeholder="Search location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <button
              onClick={handleSearch}
              className="bg-green-500 px-6 py-3 rounded-lg text-white"
            >
              Search
            </button>

          </div>
        </div>
      </div>
    </>
  );
}