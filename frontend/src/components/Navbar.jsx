import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, [location]);

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">

      {/* NAVBAR */}
      <div className="px-6 md:px-8 py-4 flex justify-between items-center
                      bg-gray-900 text-white shadow-lg border-b border-gray-800">

        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold text-green-400">
          A.J. Estate
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center text-gray-300 font-medium">

          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/listings" className="hover:text-white transition">Listings</Link>
          <Link to="/map" className="hover:text-white transition">Map</Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-400 rounded-lg 
                         hover:bg-red-400 hover:text-black transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-green-400 rounded-lg 
                           hover:bg-green-400 hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-green-500 px-4 py-2 rounded-lg 
                           hover:bg-green-600 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 shadow-lg">

          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>

          <Link to="/listings" onClick={() => setMenuOpen(false)} className="block">
            Listings
          </Link>

          <Link to="/map" onClick={() => setMenuOpen(false)} className="block">
            Map
          </Link>

          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-left text-red-400"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block">
                Login
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)} className="block text-green-400">
                Signup
              </Link>
            </>
          )}
        </div>
      )}

      {/* GREEN LINE */}
      <div className="h-1 bg-green-500"></div>

    </div>
  );
}