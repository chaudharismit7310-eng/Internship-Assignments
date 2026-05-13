function Success() {
  const data = JSON.parse(localStorage.getItem("booking"));

  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "40px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1>✅ Seat Booked Successfully</h1>

        <h2>Booking ID: #{bookingId}</h2>

        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Mobile: {data.mobile}</p>
      </div>
    </div>
  );
}

export default Success;