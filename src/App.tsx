import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/ReservationPage";
import SeatReservationPage from "./pages/SeatReservationPage";
import LoginPage from "./pages/LoginPage";
import StaffLoginPage from "./pages/StaffLoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/reservation" element={<ReservationPage/>} />
          <Route path="/Seat" element={<SeatReservationPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/stafflogin" element={<StaffLoginPage/>} />
          <Route path="/createaccount" element={<CreateAccountPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
