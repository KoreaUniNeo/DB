import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
} from "./HeaderStyle";


const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
        <Logo>CGV</Logo>
        <HeaderItemBar>
          <Headernav>tl화</Headernav>
          <Headernav>예매</Headernav>
          <Headernav>극장</Headernav>
        </HeaderItemBar>
        <Headernav>
          <HeaderLogin>로그인</HeaderLogin>
          </Headernav>
      </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
