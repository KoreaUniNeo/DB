import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import { Hr } from "../components/base/CommonStyle";
import Semi from "../components/base/Semi";
import Main from "../components/main/MainInter";
import Movie from "../components/Movie/MovieList";


// import { Empty } from "./ProjectPage";
const MainPage = () => {
  return (
    <>
      <Header/>
      <Hr/>
      <Main/>
      <Movie/>
      <Footer/>
    </>
  );
};

export default MainPage;

export const Empty = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 400px;
  display: block;
  padding-bottom: 40px;
`;
