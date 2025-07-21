import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          margin: 0,
          fontWeight: 900,
          background: "linear-gradient(90deg, #ff6a00, #ee0979)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          margin: "1rem 0",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          margin: "0 0 2rem",
          fontSize: "1.15rem",
          color: "#e0e0e0",
        }}
      >
        Sorry, the page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75em 2em",
          borderRadius: "2em",
          background: "linear-gradient(90deg, #43cea2, #185a9d)",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
          transition: "background 0.3s",
        }}
      >
        Go Home
      </a>
      <style>{`
        @media (max-width: 600px) {
          h1 { font-size: 4rem !important; }
          h2 { font-size: 1.25rem !important; }
        }
      `}</style>
    </div>
  );
}
