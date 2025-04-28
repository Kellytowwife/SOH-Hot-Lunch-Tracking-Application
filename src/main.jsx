import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThankYou from './ThankYou.jsx';
import QRCodePage from './QRCodePage.jsx';
import {
  ThankYouAttendance,
  ThankYouNewClient,
  ThankYouFoodBox,
} from './FormThankYous.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* QR Code Page */}
        <Route path="/qr" element={<QRCodePage />} />

        {/* General Thank You Page */}
        <Route path="/thankyou" element={<ThankYou />} />

        {/* Custom Thank You Pages Per Form */}
        <Route path="/thankyou/attendance" element={<ThankYouAttendance />} />
        <Route path="/thankyou/newclient" element={<ThankYouNewClient />} />
        <Route path="/thankyou/foodbox" element={<ThankYouFoodBox />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
