import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import "react-slideshow-image/dist/styles.css";

import {
  HeaderWrapper,
  Logo,
  HeaderItemBar,
  Headernav,
  HeaderLogin,
  HeaderBtn,
  Stick,
  Wrapper,
  ProfileBtn,
} from "./mainStyle"
import Slider from "react-slick";
import Img1 from "../assets/banner/1.jpg"
import Img2 from "../assets/banner/2.jpg"
import Img3 from "../assets/banner/3.jpg"
import Img4 from "../assets/banner/4.jpg"

const Main = () => {

  const settings = {
    autoPlay: true,
  };

  const imgslide = [{
    url: Img1
  },{
    url: Img2
  },{
    url: Img3
  },{
    url: Img4
  }]

  return (
    <>
        <HeaderWrapper>
          <Wrapper>          
          <SimpleImageSlider
          width={1900}
          height={774}
          images={imgslide}
          showBullets={true}
          showNavs={false}
          autoPlay={settings.autoPlay}
          autoPlayDelay={2}
          slideDuration={2}
          />
          </Wrapper>
        </HeaderWrapper>
    </>
  );
};

export default Main;

