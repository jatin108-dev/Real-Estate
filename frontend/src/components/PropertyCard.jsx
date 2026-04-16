import { Link } from "react-router-dom";

export default function PropertyCard({ p }) {
  return (
    <Link to={`/property/${p._id}`}>
      <div className="shadow rounded-xl overflow-hidden">
        <img src={p.image} className="h-40 w-full object-cover" />
        <div className="p-3">
          <h2 className="font-semibold">{p.title}</h2>
          <p className="text-gray-500">{p.location}</p>
          <p className="text-green-600 font-bold">₹{p.price}</p>
        </div>
      </div>
    </Link>
  );
}