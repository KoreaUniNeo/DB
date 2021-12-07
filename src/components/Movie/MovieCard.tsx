import React, { useEffect, useState } from "react";
import {
  CardWrapper,
  Box,
  Name,
  SmallWrapper,
  ForFlex,
  Content,
  Runtime,
  ReBox,
} from "./MovieCardStyle";
import { MovieItem } from "../../Models/Models";
export interface MovieCard{
    item: Partial<MovieItem>;
}
const MovieCard = ({item}:MovieCard) => {
  return (
    <>
    {console.log(item.img)}
      <CardWrapper>
          <ForFlex>          
             <SmallWrapper src={item.img}></SmallWrapper>
             <Box>
                <Name>{item.title}</Name>
                 <br/>
                <Content>{item.content}</Content>
                <Runtime>상영시간: {item.run_time}</Runtime>
                <ForFlex>
                    <ReBox>예매하러가기</ReBox>
                    <ReBox>평점보러가기</ReBox>
                </ForFlex>
             </Box>
             </ForFlex>
      </CardWrapper>
    </>
  );
};
export default MovieCard;
