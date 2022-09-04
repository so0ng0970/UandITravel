import React from "react";
import styled from "styled-components";

function CommentForm() {
    return (
        <div>
            <CommentL  class="media">
                <div class="media-content">
                    <div class="field">
                        <p class="control">
                            <textarea
                                class="textarea"
                                placeholder="Add a comment..."
                            ></textarea>
                        </p>
                    </div>
                    <nav class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <br/>
                                <br/>
                                <DetailPageBtn class="button is-info">
                                    Submit
                                </DetailPageBtn>
                            </div>
                        </div>
                    </nav>
                </div>
            </CommentL >
        </div>
    );
}

export default CommentForm;

const DetailPageBtn = styled.button`
    border: 1px solid #f9f5f4fb;
    color: #f7f6f2dc;
    font-weight: bolder;
    background-color: #3675ea8f;
    padding: 5px 7px;
    border-radius: 15px;
    height: 80%;
    /* width: 6rem; */
    white-space: nowrap;
    overflow: inherit;
    font-size: 1rem;
    &:hover {
        color: #3675ea8f;
        background-color: #f7f6f2dc;
        border: 1px solid #3675ea8f;
    }
`;

const CommentL = styled.article`
    display: flex;
    margin: 400px, 50px;
 
    padding: 0.5rem;
    
`;