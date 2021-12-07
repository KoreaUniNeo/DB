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
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  &+&{  
      margin-left:-400px;
  }
`;


export const ForFlex = styled.div`
    display:flex;
    width: 400px;
    text-align:center;
    align-item:center;
`;


export const Logo = styled.div`
    margin-top:50px;
    font: normal normal bold 20px/25px Spoqa Han Sans Neo;
    padding: 0 1.6vw;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #000;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.56;
    cursor: pointer;
`;
export const Staff = styled.div`
    font: normal normal bold 20px/25px Spoqa Han Sans Neo;
    border: 0;
    outline: 0;
    padding: 0 1.6vw;
    background-color: transparent;
    color: #000;
    font-weight: 700;
    line-height: 1.56;
    cursor: pointer;
    margin-bottom:13px;
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

export const LoginWrapper =styled.div`
    width: 400px;
    height: 500px;
    padding-left:30px;
`;

export const LoginBox =styled.input`
    width: 400px;
    height: 50px;
    border: 1px solid transparent;
    box-shadow: 0px 0px 30px #00000026; 
    border-radius: 10px; 
    font: normal normal bold 25px/30px Spoqa Han Sans Neo;
`;

export const Word = styled.div`
    margin:  5px 0px;
    font: normal normal bold 20px/25px Spoqa Han Sans Neo;
`;

export const CreateWord = styled.div`
    width:400px;
    margin-top: 20px;
    align-item: center;
    text-align:center;
    cursor:pointer;
    :hover {
        text-decoration: underline;
      }    
    font: normal normal bold 20px/25px Spoqa Han Sans Neo;
`;

export const LoginBtn = styled.button`
    margin-top:50px;
    width: 400px;
    height: 50px;
    font: normal normal bold 20px/25px Spoqa Han Sans Neo;
    cursor:pointer;
`;
