import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import API from "../services/api";

export default function Listings() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const searchLocation = query.get("location");

  useEffect(() => {
    API.get("/property")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredData = searchLocation
    ? data.filter((p) =>
        p.location.toLowerCase().includes(searchLocation.toLowerCase())
      )
    : data;

  const toggleCompare = (property) => {
    if (selected.find((p) => p._id === property._id)) {
      setSelected(selected.filter((p) => p._id !== property._id));
    } else {
      if (selected.length < 2) {
        setSelected([...selected, property]);
      } else {
        alert("Only 2 properties allowed");
      }
    }
  };

  if (loading) return <p className="pt-20 text-center text-white">Loading...</p>;

  return (
    <>
      <Navbar />

      {/* 🔥 BACKGROUND */}
      <div className="relative min-h-screen w-full pt-16 md:pt-20">

        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full bg-black opacity-60"></div>

        <div className="relative z-10 p-6">

          {/* 🔥 SEARCH INFO */}
          {searchLocation && (
            <div className="mb-6 flex justify-between items-center bg-white rounded-lg p-3 shadow">

              <p className="text-gray-700">
                Showing results for: <b>{searchLocation}</b>
              </p>

              <button
                onClick={() => navigate("/listings")}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Clear
              </button>

            </div>
          )}

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filteredData.map((p) => (
              <Link to={`/property/${p._id}`} key={p._id}>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                hover:shadow-2xl hover:scale-105 transition duration-300">

                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={p.images?.[0]}
                      className="h-48 w-full object-cover"
                    />

                    <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 text-sm rounded shadow">
                      ₹ {p.price}
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div className="p-4">
                    <h2 className="font-semibold text-lg text-gray-800">
                      {p.title}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {p.location}
                    </p>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCompare(p);
                      }}
                      className={`mt-3 px-3 py-1 rounded text-white text-sm ${
                        selected.find((x) => x._id === p._id)
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {selected.find((x) => x._id === p._id)
                        ? "Remove"
                        : "Compare"}
                    </button>
                  </div>

                </div>

              </Link>
            ))}

          </div>

          {/* COMPARE BUTTON */}
          {selected.length === 2 && (
            <button
              onClick={() => navigate("/compare", { state: selected })}
              className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700"
            >
              Compare Now
            </button>
          )}

          {/* NO RESULT */}
          {filteredData.length === 0 && (
            <p className="text-center mt-10 text-white">
              No properties found
            </p>
          )}

        </div>

      </div>
    </>
  );
}