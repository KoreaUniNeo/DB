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
        <Link to="/">
         <Logo   onClick={() => {
                window.scrollTo(0, 0);
              }}>CGV</Logo>
        </Link>
        <div>
        <HeaderItemBar>
          <Headernav>영화</Headernav>
          <Headernav>
          <Link to="/reservation">예매</Link>
          </Headernav>
          <Headernav>
          <Link to="/Seat">극장</Link>
          </Headernav>
          <Headernav>
          <HeaderLogin>
          <Link to="/login">로그인</Link>
            </HeaderLogin>
          </Headernav>
        </HeaderItemBar>
          </div>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
