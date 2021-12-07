import styled from "styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0px 0px 30px #00000026;
  width: 1280px;
  height: 370px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  font-size: 25px;
  overflow: hidden;

  position: relative;
  margin: 20px 20px;
  padding: 20px 20px;
  text-align: left;
  align-item:center;
`;
export const SmallWrapper = styled.img`
  box-shadow: 0px 0px 30px #00000026;
  width: 300px;
  height: 330px;
  border-radius: 10px;
  object-fit:cover;
`;
export const ForFlex = styled.div`
    display:flex;
    padding:auto;
`;

export const Box = styled.div`
    width:900px;
    height:330px;
    margin: 0 auto;
    text-align: left;
    align-item: left;
`;


export const Name = styled.div`
  margin: 20px auto;
  text-align: center;
  align-items: center;
  display: inline-block;
  height: 20px;
  border-radius: 16px;
  font-size: 30px;
  padding: 2px 13px;
  color: black;
  font: normal normal bold 30px/35px Spoqa Han Sans Neo;
`;
export const Content = styled.div`
  margin: 20px auto;
  text-align: left;
  align-items: left ;
  display: inline-block;
  height: 20px;
  border-radius: 16px;
  font-size: 30px;
  padding: 2px 13px;
  color: black;
  font: normal normal bold 15px/20px Spoqa Han Sans Neo;

`;
export const Runtime = styled.div`
  margin: 50px auto;
  text-align: center;
  align-items: center;
  display: inline-block;
  height: 20px;
  border-radius: 16px;
  font-size: 30px;
  padding: 2px 13px;
  color: black;
  font: normal normal bold 20px/25px Spoqa Han Sans Neo;
`;

export const ReBox = styled.div`
box-shadow: 0px 0px 30px #00000026;
width: 300px;
height: 50px;
background: #ffffff 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
font-size: 25px;
align-item: center;
display:flex;
justify-content:center;
font: normal normal bold 20px/25px Spoqa Han Sans Neo;
margin: 0 auto;
cursor: pointer;
`;
