import React from "react";
import Nevbar from "./components/Nevbar";
import "./App.css";
import Home from "./Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import HotelRoom from "./components/HotelRoom/HotelRoom.jsx";
import Rooms from "./components/HotelRoom/Room/Rooms.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HotelDetail } from "./components/HotelDetail/HotelDetail.jsx";
import RoomDetail from "./components/Roomdetail/RoomDetail.jsx";


function App() {
  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<HotelRoom />} />
        <Route path="/room/:id" element={<RoomDetail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
