import React from "react";
import Header from "../components/header";
import List from "../components/travellist/List";
import TravelCard from "../components/travellist/TravelCard";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
const MainPage = () => {
    return (
       <Layout>
        <MainContainer> 
            <Header />
            <List />
            <TravelCard />
        </MainContainer></Layout>
    );
};

export default MainPage;
const Input = styled.input`
 
  background-color: #ffffffd0;
`;
const MainContainer = styled.div``;
