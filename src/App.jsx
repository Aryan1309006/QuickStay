import React, { lazy,Suspense  } from "react";

import "./App.css";
import Home from "./Home/Home.jsx";
import HotelRoom from "./components/HotelRoom/HotelRoom.jsx";
import Rooms from "./components/HotelRoom/Room/Rooms.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HotelDetail } from "./components/HotelDetail/HotelDetail.jsx";
const RoomDetail = lazy(() => import("./components/Roomdetail/RoomDetail.jsx"));
const Footer = lazy(() => import("./components/footer/Footer.jsx"));
const Nevbar = lazy(() => import("./components/Nevbar"));
function App() {
  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<HotelRoom />} />
        <Route path="/booking" element={<></>} />
        <Route path="/room/:id" element={ <Suspense fallback={<div className="loading">Loading...</div>}><RoomDetail/></Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
