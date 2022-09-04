import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
const TravelCard = () => {
    return (
        <div>
            <Link to={`/detail`}>
                <Cardcontainer className="media">
                    <CardFigure className="media-center">
                        <ImgContainer className="image is-64x64">
                            <CardImg
                                hover
                                src="https://youimg1.tripcdn.com/target/100a0e0000006zype378A_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip"
                            />
                        </ImgContainer>
                    </CardFigure>
                    <div className="media-content">
                        <div className="content">
                            <div>
                                <strong>John Smith</strong>
                                <small>@johnsmith</small> <small>31m</small>
                                <div>
                                    <CardTiltle>제주도 같이가실 분 </CardTiltle>
                                    <br></br>
                                    <CardContent>MBTI : ISFP</CardContent>
                                    <CardContent>지역이름 : 제주도</CardContent>
                                    <CardContent>
                                        모집 날짜 : 제주도
                                    </CardContent>
                                </div>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </div>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small">
                                        ❤<i className="fas fa-retweet"></i>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="media-right">
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
        min-width: 270px;
        max-width: 400px;
        height: 100%;
        min-height: 400px;
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

const CardFigure = styled.div``;

const ImgContainer = styled.div`
    position: relative;
    width: 90%;
    height: 15vw;
    object-fit: scale-down;
    margin: 10px;
    object-position: center;
    text-align: center;
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

const CardTiltle = styled.h2`
    margin: 5px;
    font-size: 1rem;
`;

const CardContent = styled.p``;