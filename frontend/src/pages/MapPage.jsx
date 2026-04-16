import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function MapPage() {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Delhi");

  useEffect(() => {
    API.get("/property")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const locations = [...new Set(data.map(p => p.location))];
  const filtered = data.filter(p => p.location === selectedLocation);

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen w-full pt-16 md:pt-20 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            className="w-full h-full object-cover object-center md:object-top"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-4 md:px-8 pb-10">

          {/* HEADER */}
          <div className="mb-6 text-white">
           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
           Property <span className="text-green-500">Map</span>
           </h1>


            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 rounded-full bg-white text-black shadow"
            >
              {locations.map((loc, i) => (
                <option key={i}>{loc}</option>
              ))}
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* MAP */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="map"
                width="100%"
                height="350"
                className="md:h-96"
                loading="lazy"
                src={`https://www.google.com/maps?q=${selectedLocation}&output=embed`}
              ></iframe>
            </div>

            {/* LIST */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">

              <h2 className="text-lg md:text-xl font-semibold mb-4 text-black">
                Properties in{" "}
                <span className="text-green-600">{selectedLocation}</span>
              </h2>

              <div className="space-y-4 overflow-y-auto h-80 md:h-96">

                {filtered.map((p) => (
                  <div
                    key={p._id}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border 
                               hover:shadow-md hover:scale-105 transition cursor-pointer bg-gray-50"
                  >
                    <img
                      src={p.images?.[0]}
                      className="w-16 h-12 md:w-24 md:h-16 object-cover rounded"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        {p.title}
                      </h3>

                      <p className="text-green-600 text-sm font-medium">
                        ₹ {p.price}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}