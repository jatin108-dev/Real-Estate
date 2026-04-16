import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function PropertyDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    API.get(`/property/${id}`)
      .then(res => {
        setData(res.data);

        if (res.data.images && res.data.images.length > 0) {
          setSelected(res.data.images[0]);
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Visit booked successfully!");
    setShowForm(false);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "100px", maxWidth: "900px", margin: "auto" }}>

        {/* MAIN IMAGE */}
        {selected && (
          <img
            src={selected}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        )}

        {/* THUMBNAILS */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {data.images && data.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelected(img)}
              style={{
                width: "100px",
                height: "80px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            />
          ))}
        </div>

        {/* DETAILS */}
        <h2 style={{ marginTop: "20px" }}>{data.title}</h2>
        <p>{data.location}</p>
        <h3 style={{ color: "green" }}>₹ {data.price}</h3>
        <p>{data.description}</p>

        {/* 🔥 BOOK BUTTON (NEW) */}
        <button
          onClick={() => setShowForm(true)}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Book Site Visit
        </button>

      </div>

      {/* 🔥 MODAL FORM (NEW) */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px"
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Book Visit</h3>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                required
                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
              />

              <input
                type="email"
                placeholder="Email"
                required
                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
              />

              <input
                type="date"
                required
                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
              />

              <input
                type="time"
                required
                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "green",
                  color: "white",
                  padding: "8px",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Confirm
              </button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              style={{
                marginTop: "10px",
                width: "100%",
                color: "red"
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}