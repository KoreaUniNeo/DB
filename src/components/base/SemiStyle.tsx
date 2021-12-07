import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderWrapper = styled.h2`
  width: 100%;
  height: 100px;
  margin-bottom: 90px;
  margin: 0 auto;
  padding: 20px;
  position: fixed;
  z-index: 1;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  text-align: left;
  width: 1280px;
  justify-content: space-between;
`;
export const Logo = styled.div`
    padding: 0 1.6vw;
    height: 9rem;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #000;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.56;
    cursor: pointer;
`;

export const HeaderItemBar = styled.div`
  display: flex;
  font-size: 17px;
  height: 100%;
  @font-face {
    font-family: "S-CoreDream-4Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Headernav = styled.div`
  border-radius: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }

  :active {
  }

  & + & {
    margin-left: 30px;
  }

  color: #3c3c3c;
  display: flex;
  align-items: center;
`;

export const HeaderLogin = styled.div`
  border: 0 auto;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  :hover {
    text-decoration: underline;
  }
  color: #3c3c3c;
  align-items: center;
  text-align:center;
`;

export const HeaderBtn = styled.img`
  & + & {
    margin-left: 15px;
  }
  width: 30px;
  height: 30px;
`;

export const ProfileBtn = styled.img`
  margin-left: 15px;

  width: 30px;
  height: 30px;
  border-radius: 100px;
  object-fit: cover;
`;

export const Stick = styled.div`
  margin-right: 45px;
  color: #3c3c3c;
`;
