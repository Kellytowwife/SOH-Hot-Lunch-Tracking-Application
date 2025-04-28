import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import QRCodePage from "./QRCodePage.jsx";
import Admin from "./Admin.jsx";   // 🛠 Import Admin here!
import { ThankYouAttendance, ThankYouFoodBox, ThankYouNewClient } from "./FormThankYous.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qrcode" element={<QRCodePage />} />
        <Route path="/thankyou-attendance" element={<ThankYouAttendance />} />
        <Route path="/thankyou-foodbox" element={<ThankYouFoodBox />} />
        <Route path="/thankyou-newclient" element={<ThankYouNewClient />} />
        <Route path="/admin" element={<Admin />} />    {/* 🛠 Add Admin route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
