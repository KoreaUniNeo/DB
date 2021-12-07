import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
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
} from "./MovieLisStyle";
import Img1 from "../assets/banner/1.jpg"
import Img2 from "../assets/banner/2.jpg"
import Img3 from "../assets/banner/3.jpg"
import Img4 from "../assets/banner/4.jpg"
import { MovieItem } from "../../Models/Models";



const Movie = () => {
  const [arr,Setarr]=useState([{
      img: "",
      title: "",
      content:"",
      run_time:"",
  }]);
  useEffect(()=>{
    Setarr(imgArr);
  },[])
  const imgArr = [{
      img: Img1,
      title: "킹스맨 : 퍼스트 에이전트",
      content: "수백만 명의 생명을 위협할 전쟁을 모의하는 역사상 최악의 폭군들과 범죄자들에 맞서, 이들을 막으려는 한 사람과 최초의 독립 정보기관 ‘킹스맨’의 기원을 그린 영화",
      run_time:" 2시간 11분",
},{
    img: Img2,
    title: "매트릭스 : 리저렉션",
    content: "《매트릭스: 리저렉션》은 2021년 개봉 예정인 미국의 SF 액션 영화로, 매트릭스 시리즈의 4번째 작품이다. 2021년 12월 22일, 미국에서는 극장 개봉과 함께 HBO 맥스를 통해 동시 공개된다.",
    run_time:"2시간 28분",
},{
    img: Img3,
    title: "스파이더맨 : 노웨이홈",
    content: "영화 은 정체가 탄로난 스파이더맨 '피터 파커'(톰 홀랜드)가문제를 해결하기 위해 '닥터 스트레인지'(베네딕트 컴버배치)의 도움을 받던 중 뜻하지 않게 멀티버스가 열리게 되고,이를 통해 '닥터 옥토퍼스'(알프리드 몰리나) 등 각기 다른 차원의 숙적들이 나타나며 사상 최악의 위기를 맞게 되는 이야기를 그린 마블 액션 블록버스터.",
    run_time:"2시간 28분",
},{
    img: Img4,
    title: "팬텀 : 더 뮤지컬 라이브",
    content: "파리 오페라 하우스의 어둠만이 가득한 지하,그곳에는 천재적인 재능을 지녔지만 흉측한 얼굴 탓에 숨어 지내는 오페라의 유령이 있다.오페라 하우스를 지배하는 그는 `팬텀`이라고만 알려져 있을 뿐 그 누구도 그의 정체를 알지 못한다.그는 우연히 천상의 목소리를 가진 크리스틴 다에의 목소리를 듣고 단번에 매료되고, 그녀를 오페라 극장의 새로운 디바로 만들기 위한 비밀스러운 레슨을 시작한다.",
    run_time:"2시간 57분",}];
  
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
        {arr.map((item)=>{
            return(
                <MovieCard item={item}></MovieCard>
            )
        })}
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Movie;
