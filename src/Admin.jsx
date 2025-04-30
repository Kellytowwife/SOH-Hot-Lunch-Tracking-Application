import React from "react";

function Admin() {
  return (
    <div style={adminContainerStyle}>
      <h1 style={titleStyle}>Admin Dashboard</h1>
      <p style={textStyle}>
        Welcome to the Seeds of Hope Hot Lunch Admin Section.
      </p>
      <p style={textStyle}>
        Here you will be able to see real-time attendance and chore signups
        (coming soon!).
      </p>
    </div>
  );
}

const adminContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "2rem",
  backgroundColor: "#f3fef3",
};

const titleStyle = {
  fontSize: "2rem",
  color: "#2e7d32",
  marginBottom: "1rem",
};

const textStyle = {
  fontSize: "1.1rem",
  color: "#333",
  textAlign: "center",
  maxWidth: "600px",
};

export default Admin;
