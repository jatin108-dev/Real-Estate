import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Compare() {
  const location = useLocation();
  const data = location.state || [];

  if (data.length < 2)
    return <p className="pt-20 text-center text-white">No data to compare</p>;

  const p1 = data[0];
  const p2 = data[1];

  return (
    <>
      <Navbar />

      {/*  SOOTHING BACKGROUND */}
      <div className="pt-16 md:pt-20 min-h-screen p-4 md:p-6 bg-slate-900 text-white">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Compare <span className="text-green-400">Properties</span>
        </h1>

        <div className="max-w-5xl mx-auto">

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-slate-800 p-2 rounded-xl shadow">
              <img
                src={p1.images?.[0]}
                className="h-48 md:h-64 w-full object-cover rounded-lg"
              />
            </div>

            <div className="bg-slate-800 p-2 rounded-xl shadow">
              <img
                src={p2.images?.[0]}
                className="h-48 md:h-64 w-full object-cover rounded-lg"
              />
            </div>

          </div>

          {/* TABLE */}
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden">

            <div className="grid grid-cols-3 p-4 border-b border-slate-700 font-semibold bg-slate-700">
              <div>Feature</div>
              <div className="text-center">{p1.title}</div>
              <div className="text-center">{p2.title}</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-slate-700">
              <div className="font-medium">Location</div>
              <div className="text-center">{p1.location}</div>
              <div className="text-center">{p2.location}</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-slate-700">
              <div className="font-medium">Price</div>
              <div className="text-center text-green-400">₹ {p1.price}</div>
              <div className="text-center text-green-400">₹ {p2.price}</div>
            </div>

            <div className="grid grid-cols-3 p-4">
              <div className="font-medium">Type</div>
              <div className="text-center">Premium</div>
              <div className="text-center">Standard</div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}