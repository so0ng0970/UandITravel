import React from "react";
import Header from "../components/header";
import List from "../components/travellist/List";
import TravelCard from "../components/travellist/TravelCard";
import styled from "styled-components";

const MainPage = () => {
    return (
        <MainContainer>
            <Header />
            <List />
            <TravelCard />
        </MainContainer>
    );
};

export default MainPage;

const MainContainer = styled.div``;
