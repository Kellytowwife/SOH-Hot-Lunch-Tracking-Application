import React from "react";

function ThankYouLayout({ title, message }) {
  return (
    <div
      style={{ textAlign: "center", padding: "3rem", fontFamily: "sans-serif" }}
    >
      <h1>✅ {title}</h1>
      <p>{message}</p>

      <a href="/">
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⬅️ Back to Home
        </button>
      </a>
    </div>
  );
}

export function ThankYouAttendance() {
  return (
    <ThankYouLayout
      title="Thank you for checking in!"
      message="Your attendance has been recorded."
    />
  );
}

export function ThankYouNewClient() {
  return (
    <ThankYouLayout
      title="You're all set!"
      message="Thanks for registering as a new client."
    />
  );
}

export function ThankYouFoodBox() {
  return (
    <ThankYouLayout
      title="Request received!"
      message="Your food box request has been submitted."
    />
  );
}
