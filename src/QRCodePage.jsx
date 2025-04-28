import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const forms = [
  {
    title: "Daily Attendance",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdoSjS6N7O2Divcq1krDI0_dFsAl0tRF4nk39_rhSefT4kKUA/viewform?usp=header",
  },
  {
    title: "New Client Registration",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScr93YXOVZ7pCJAEm-tAymsrhLoC1r8RjtJLsoX09iIYQNqCw/viewform?usp=header",
  },
  {
    title: "Food Box Request",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfw8i9hH2LjmF-AsAQ_x6iExThOsdu1T4p4PpsqoGFNYWdn0Q/viewform?usp=header",
  },
];

export default function QRCodePage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📱 Form QR Codes</h1>
      <p>Scan or print these to access each form:</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {forms.map((form, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <QRCodeCanvas value={form.url} size={160} />
            <p style={{ marginTop: "0.5rem" }}>{form.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
