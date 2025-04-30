import React from "react";
import { Link } from "react-router-dom";

function App() {
  const buttonStyle = {
    display: "inline-block",
    padding: "1rem",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "#66bb6a",
    color: "white",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{
      backgroundColor: "#e8f5e9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem"
    }}>
      <img src="/icon.png" alt="Seeds of Hope Logo" style={{ width: "100px", marginBottom: "1rem" }} />
      <h1 style={{ color: "#2e7d32", marginBottom: "1rem", textAlign: "center" }}>Seeds of Hope</h1>
      <h2 style={{ color: "#2e7d32", marginBottom: "2rem", textAlign: "center" }}>Hot Lunch Program</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: "400px" }}>
        <section style={cardStyle}>
          <h3>Daily Attendance</h3>
          <a href="https://forms.gle/xxxxx" style={buttonStyle}>Open Form</a>
        </section>

        <section style={cardStyle}>
          <h3>New Client Registration</h3>
          <a href="https://forms.gle/xxxxx" style={buttonStyle}>Open Form</a>
        </section>

        <section style={cardStyle}>
          <h3>Food Box Request Form</h3>
          <a href="https://forms.gle/xxxxx" style={buttonStyle}>Open Form</a>
        </section>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/admin" style={{ ...buttonStyle, backgroundColor: "#388e3c" }}>Admin View</Link>
      </div>

      <p style={{ marginTop: "2rem", color: "#2e7d32", fontSize: "0.9rem", textAlign: "center" }}>
        Welcome to the Seeds of Hope Hot Lunch Program!<br />
        Thank you for supporting our mission of love, dignity, and care.
      </p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

export default App;
