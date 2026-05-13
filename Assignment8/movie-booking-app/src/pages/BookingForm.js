
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    const bookingData = {
      name,
      email,
      mobile,
    };

    localStorage.setItem("booking", JSON.stringify(bookingData));

    navigate("/success");
  }

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          🎟 Book Ticket
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <input
          type="text"
          placeholder="Enter Mobile"
          onChange={(e) => setMobile(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            marginTop: "20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingForm;
