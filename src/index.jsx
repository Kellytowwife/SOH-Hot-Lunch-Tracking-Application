import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Admin from './Admin.jsx';
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
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/qr" element={<QRCodePage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/thankyou/attendance" element={<ThankYouAttendance />} />
        <Route path="/thankyou/newclient" element={<ThankYouNewClient />} />
        <Route path="/thankyou/foodbox" element={<ThankYouFoodBox />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
