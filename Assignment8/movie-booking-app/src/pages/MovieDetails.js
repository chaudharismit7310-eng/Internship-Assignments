import { useNavigate } from "react-router-dom";

function MovieDetails() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>🎥 Movie Details</h1>

      <img
        src="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF1000,1000_QL80_.jpg"
        alt="movie"
        style={{
          width: "300px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Experience the biggest blockbuster on the big screen.
      </p>

      <button
        onClick={() => navigate("/book")}
        style={{
          padding: "12px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;