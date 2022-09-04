import React from "react";
import styled from "styled-components";

function CommentList() {
    return (
        <div>
            <CommentListContainer class="media">
                <CommentListBox class="media-content">
                    <div class="content">
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