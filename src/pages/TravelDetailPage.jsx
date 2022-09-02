import React from "react";
import Info from "../components/detail/Info";
import CommentForm from "../components/comment/CommentForm";
import CommentList from "../components/comment/CommentList";
import styled from "styled-components";

const TravelDetailPage = () => {
    return (
        <DetailContainer>
            여기는 TravelDetailPage
            <Info />
            <CommentForm />
            <CommentList />
        </DetailContainer>
    );
};

export default TravelDetailPage;

const DetailContainer = styled.div``;
