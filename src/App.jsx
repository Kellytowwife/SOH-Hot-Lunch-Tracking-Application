import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";

function App() {
  const forms = [
    {
      title: "Daily Attendance",
      url: "https://forms.gle/Ez3PUBZ2Zn84KZSW6",
    },
    {
      title: "New Client Registration",
      url: "https://forms.gle/1XKVBZFQGjvZjXYT9",
    },
    {
      title: "Food Box Request Form",
      url: "https://forms.gle/B5psGBtpTPSGPTuMA",
    },
  ];

  return (
    <BrowserRouter>
      <div className="app-container">
        <img src="/icon.png" alt="Seeds of Hope Logo" className="logo" />
        <h1>Seeds of Hope - Hot Lunch Program</h1>
        <p className="subtitle">Helping our community with meals and hope since 1993</p>

        <div className="form-buttons">
          {forms.map((form, idx) => (
            <a
              key={idx}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="form-button"
            >
              {form.title}
            </a>
          ))}
        </div>

        <div className="admin-link">
          <Link to="/admin" className="admin-button">Admin</Link>
        </div>
      </div>

      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

