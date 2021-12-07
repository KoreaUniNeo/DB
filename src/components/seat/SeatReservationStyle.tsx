import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderWrapper = styled.div`
    padding-top:200px;
    width: 100%;
    margin: 0 auto;
    min-height: 774px;
    padding-bottom:100px;
`;

export const Wrapper = styled.div`
  box-shadow: 0px 0px 30px #00000026;
  border-radius: 10px;
  background-color:#ffffff;
  height: 600px;
  text-align: left;
  width: 305px;
  margin: 0 auto;
  overflow: hidden;
  &+&{  
      margin-left:-400px;
  }
`;

export const ForFlex = styled.div`
    display:flex;
`;


export const Logo = styled.div`
    padding: 0 1.6vw;
    height: 5rem;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #000;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.56;
    cursor: pointer;
`;

export const Box = styled.button`
    cursor: pointer;
    width: 305px;
    height: 50px;
    padding: 0 1.6vw;
    .cliked{
        color: gold;
    }
`;

