import React from "react";
import { useNavigate } from "react-router-dom";

import avengers from "../images/avengers.jpg";
import batman from "../images/batman.jpg";
import spiderman from "../images/spiderman.jpg";
import ironman from "../images/ironman.jpg";

function Home() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Avengers Endgame",
      image: avengers,
    },
    {
      id: 2,
      title: "Batman",
      image: batman,
    },
    {
      id: 3,
      title: "Spiderman",
      image: spiderman,
    },
    {
      id: 4,
      title: "Iron Man",
      image: ironman,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
          fontSize: "50px",
        }}
      >
        🎬 Movie Booking App
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              backgroundColor: "#1c1c1c",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 0 15px rgba(255,255,255,0.2)",
              transition: "0.3s",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "white",
                  marginBottom: "15px",
                }}
              >
                {movie.title}
              </h2>

              <button
                onClick={() => navigate(`/movie/${movie.id}`)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;