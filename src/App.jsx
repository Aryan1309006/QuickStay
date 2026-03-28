import React from "react";
import Nevbar from "./components/Nevbar";
import "./App.css";
import Home from "./Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import HotelRoom from "./components/HotelRoom";
import Rooms from "./components/Rooms";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room" element={<HotelRoom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
