import React,{useEffect} from "react";
import styled from "styled-components";
import {getComment} from "../../redux/module/TravelCommentSlice"
import {useDispatch,useSelector} from "react-redux"
function CommentList() {


    const dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getComment());
 },[dispatch])



    return (
        <div>
            <CommentListContainer className="media">
                <CommentListBox className="media-content">
                    <div className="content">
                        <p>
                            <strong>김정원</strong> <small>@gardenk</small>{" "}
                            <small>31m</small>
                            <br />
                            우와... 부럽다 ㅠㅠ 나도 가고싶다 ㅠㅠ
                        </p>
                    </div>
                </CommentListBox>
            </CommentListContainer>
        </div>
    );
}

export default CommentList;

const CommentListContainer = styled.article`
    display: flex;
    margin: 5px;
   
    padding: 0.5rem;
    
`;

const CommentListBox = styled.div`
    margin: 20px;
    text-align: left;
`;