import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import "react-slideshow-image/dist/styles.css";

import {
  HeaderWrapper,
  Logo,
  Box,
  Wrapper,

} from "./SeatReservationStyle"
import Slider from "react-slick";
import Img1 from "../assets/banner/1.jpg"
import Img2 from "../assets/banner/2.jpg"
import Img3 from "../assets/banner/3.jpg"
import Img4 from "../assets/banner/4.jpg"
import { Hr } from "../base/CommonStyle";
import { ForFlex } from "../Movie/MovieCardStyle";

const SeatReservation = () => {
 

  return (
    <>
        <HeaderWrapper>
          <ForFlex>
          <Wrapper> 
          </Wrapper>
          </ForFlex>
        </HeaderWrapper>
    </>
  );
};

export default SeatReservation;

