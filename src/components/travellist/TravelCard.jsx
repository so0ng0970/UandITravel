import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
const TravelCard = () => {
    return (
        <div>
            <Link  to={`/detail`}>
            <Cardcontainer class="media">
                <CardFigure class="media-center">
                    <ImgContainer class="image is-64x64">
                        <CardImg
                            hover
                            src="https://youimg1.tripcdn.com/target/100a0e0000006zype378A_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip"
                        />
                    </ImgContainer>
                </CardFigure>
                <div class="media-content">
                    <div class="content">
                        <div>
                            <strong>John Smith</strong>
                            <small>@johnsmith</small> <small>31m</small>
                            <div>
                                <CardTiltle>제주도 같이 가실 분 </CardTiltle>
                                <br/>
                                <CardContent>MBTI : ISFP</CardContent>
                                <CardContent>지역이름 : 제주도</CardContent>
                                <CardContent>모집 날짜 : 제주도</CardContent>
                            </div>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare magna eros, eu pellentesque
                            tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis.
                        </div>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small">
                                    <i class="fas fa-reply"></i>
                                </span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small">
                                    ❤<i class="fas fa-retweet"></i>
                                </span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small">
                                    <i class="fas fa-heart"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    {/* <button class="delete"></button> */}
                </div>
            </Cardcontainer>
           </Link>
        </div>
    );
};

export default TravelCard;

const Cardcontainer = styled.div`
    & {
        /* border: 1px solid black; */
        /* display: flex; */
        justify-content: center;
        width: 100%;
        background-color: white;
        position: relative;
        border-radius: 20px;
        box-shadow: 5px 5px 7px 3px gray; //box-shadow: offset-x | offset-y | blur-radius | spread-radius | color
        padding: 10px;
    }
    &:hover {
        transform: scale (1.5);
    }
`;

const CardFigure = styled.div`

`;
  
const ImgContainer = styled.div`
    position: relative;
    width: 90%;
    height: 15vw;
    object-fit: scale-down;
    margin: 10px;
    object-position: center;
    text-align: center;
`;

const CardBox = styled.div`
    & {
        border: 1px solid yellow;
        position: absolute;
        /* padding: 3px 3px 3px 3px; */
        width: 100%;
        height: 100%;
    }
    /* &:after {
        display: block;
        content: "";
        padding-bottom: 100%;
    } */
`;

const CardImg = styled.img`
    position: absoute;
    width: 100%;
    height: 15vw;
   
    bottom: 0;
    left: 10px;
    right: 0;
    margin: auto;
    object-fit: cover;
    border-radius: 5px;
  
`;

const CardTiltle = styled.h1`
    font-size: 20px;
`;

const CardContent = styled.p``;