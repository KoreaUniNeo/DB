import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import { Hr } from "../components/base/CommonStyle";
import Semi from "../components/base/Semi";
import Main from "../components/main/MainInter";
import Movie from "../components/Movie/MovieList";
import Reservation from "../components/reservation/Reservation";
import Img1 from "../assets/banner/1.jpg"
import Img2 from "../assets/banner/2.jpg"
import Img3 from "../assets/banner/3.jpg"
import Img4 from "../assets/banner/4.jpg"
import Login from "../components/login/Login";
import StaffLogin from "../components/stafflogin/StaffLogin";

// import { Empty } from "./ProjectPage";
const StaffLoginPage = () => {
  return (
    <>
      <Header/>
      <Hr/>
      <StaffLogin/>
      <Footer/>
    </>
  );
};

export default StaffLoginPage;

export const Empty = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 400px;
  display: block;
  padding-bottom: 40px;
`;
