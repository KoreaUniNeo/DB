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
  Pass,
  inWrapper,

} from "./ReservationStyle"
import Slider from "react-slick";
import Img1 from "../assets/banner/1.jpg"
import Img2 from "../assets/banner/2.jpg"
import Img3 from "../assets/banner/3.jpg"
import Img4 from "../assets/banner/4.jpg"
import { Hr } from "../base/CommonStyle";
import { ForFlex } from "../Movie/MovieCardStyle";

const Reservation = () => {

  const settings = {
    autoPlay: true,
  };
  const Movie =[{
    index:0,
    label:"킹스맨 : 퍼스트 에이전트",
  },{
    index:1,
    label:"매트릭스 : 리저렉션",
},{
    index:2,
    label:"스파이더맨 : 노웨이홈",
},{
    index:3,
    label:"팬텀 : 더 뮤지컬 라이브",
}]

  const imgslide = [{
    url: Img1
  },{
    url: Img2
  },{
    url: Img3
  },{
    url: Img4
  }]

  const Bigregion=[{
    index:0,
    label:"서울",
  },{
    index:1,
    label:"경기/인천",
},{
    index:2,
    label:"충청/대전",
},{
    index:3,
    label:"전라/광주",
},{
    index:4,
    label:"경북/대구",
},{
    index:5,
    label:"경남/부산/울산",
},{
    index:6,
    label:"강원",
},{
    index:7,
    label:"제주",
}]

  const [select,SetSelect]=useState({
      movie: "",
      bigregion: 0,
      region: "",
      time: "",
  })
  const [subselect,setSubselect]=useState([""])
  const [TimeSelect,setTiemSelect]=useState([""])

  const handleChange=()=>{
    if(select.bigregion==0){
        setTiemSelect([""]);
        setSubselect(["가산디지털","강남","강동","건대입구","김포공항","노원","도곡","서울대입구","수유"]);
    }
    else if(select.bigregion==1){
        setTiemSelect([""]);
        setSubselect(["광교아울렛","부평","송탄"]);
    }
    else if(select.bigregion==2){
        setTiemSelect([""]);
        setSubselect(["당진","대전","아산터미널"]);
    }
    else if(select.bigregion==3){
        setTiemSelect([""]);
        setSubselect(["광주","전주"]);
    }
    else if(select.bigregion==4){
        setTiemSelect([""]);
        setSubselect(["경주","동성로"]);
    }
    else if(select.bigregion==5){
        setTiemSelect([""]);
        setSubselect(["부산본점","통영"]);
    }
    else if(select.bigregion==6){
        setTiemSelect([""]);
        setSubselect(["동해","속초"]);
    }
    else if(select.bigregion==7){
        setTiemSelect([""]);
        setSubselect(["서귀포","제주아라"]);
    }
  }


  var Colorful = document.getElementsByClassName("Box");
  function handleClick(event:any) {
    console.log(event.target,"??");
    console.log(event.target.classList);
    console.log(Colorful);
    if (event.target.classList[1] === "clicked") {
      event.target.classList.remove("clicked");
    } else {
      for (var i = 0; i < Colorful.length; i++) {
        Colorful[i].classList.remove("clicked");
      }

      event.target.classList.add("clicked");
    }
  }
  
  function init() {
      console.log("hi");
    for (var i = 0; i < Colorful.length; i++) {
      Colorful[i].addEventListener("click", handleClick);
      console.log(Colorful[i]);
    }
  }

  const handleTime=()=>{
     if(select.region=="가산디지털"){
        setTiemSelect(["1관: 16:30","1관: 18:30","2관: 19:30","1관: 20:30","1관: 21:30"])
     }
     else{
         setTiemSelect([""]);
         SetSelect((prev)=>{
            return Object.assign({},prev,{time:""})
        })
     }
  }

  const isitClick=()=>{
    if(select.time){
    setIsit(1);}
  }

  const [isit,setIsit]=useState(0);

  useEffect(()=>{
      handleChange();
      if(select.region){
      handleTime();
  }},[select]);

  return (
    <>
        <HeaderWrapper>
          {isit == 0 ?(
                    <ForFlex>      
                    <Wrapper> 
                      <Logo>Movie</Logo>
                      {Movie.map((item) => (
                        <Box onClick={()=>{SetSelect((prev)=>{
                           return Object.assign({},prev,{movie: item.label})
                        })}}>{item.label}</Box>
                      ))}
                    </Wrapper>
                    <Wrapper> 
                      <Logo>Region</Logo>
                      {Bigregion.map((item) => (
                        <Box onClick={()=>{SetSelect((prev)=>{
                            return Object.assign({},prev,{bigregion: item.index,time:""})
                        })}}>{item.label}</Box>
                      ))}
                    </Wrapper>
                    <Wrapper> 
                      <Logo>Theater</Logo>
                      {subselect.map((item, index) => (
                        <Box onClick={()=>{SetSelect((prev)=>{
                            return Object.assign({},prev,{region:item})
                        })}}>{item}</Box>
                      ))}
                    </Wrapper>
                    <Wrapper> 
          
                      <Logo>Time</Logo>
                      {TimeSelect.map((item)=>(
                          <Box onClick={()=>{SetSelect((prev)=>{
                              return Object.assign({},prev,{time:item})
                          })}}>{item}</Box>
                      ))}
          
                      {(select.time!="")&&(
                          <Pass onClick={()=>{isitClick()}}>다음</Pass>
                      )}
                    </Wrapper>
                    </ForFlex>
          ):(
          <></>
          )}
        </HeaderWrapper>
    </>
  );
};

export default Reservation;

