import React from "react";
import TravelCard from "./TravelCard";
import styled from "styled-components";

const List = () => {
    return (
        <ListContainer>
            <GridContainer>
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
            </GridContainer>
        </ListContainer>
    );
};

export default List;

const ListContainer = styled.div`
    /* top: -50px; */
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    gap: 50px;
    height: 100%;
    margin:60px 60px 60px 125px   ;
`;