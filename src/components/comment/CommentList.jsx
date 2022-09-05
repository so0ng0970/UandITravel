import React,{useEffect,useState} from "react";
import styled from "styled-components";
import {getComment} from "../../redux/module/TravelCommentSlice"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import { useLocation } from "react-router-dom";
const CommentList=()=> {


    const dispatch = useDispatch();
    const {comment} = useSelector ((state) =>state.comment)
    console.log('하이',comment)
  

       const [comments, setComments] = useState(null);
       const [updatedTitle, setUpdatedTitle] = useState({
        content: "",
        input: 0,
        cardId: 0,
      });
    
    
  //삭제
    const onClickDelete = (id) => {
        axios
          .delete(`http://localhost:3001/comment/${id}`)
          // .than
          .catch((error) => console.log(error));
          
      };
   //수정 
      const makeInput = async (comment, id) => {
        await axios.put(`http://localhost:3001/comment/${id}`, {
          ...comment,
          input: 1,
        });

      };
    
      const onClickUpdate = (id, updated) => {
        
        axios
          .put(`http://localhost:3001/comment/${id}`, updated)
   
          .catch((error) => console.log(error));
      };

    useEffect(() => {
        dispatch(getComment());
      }, []);
    
     return (
        <div> 
            {comment&&comment.map((comment) => (
            <CommentListContainer className="media" 
            key={ comment.id}
             comment={comment}
            
             >
                <CommentListBox className="media-content">
                    <div className="content">
                        <p>
                            <strong>김정원</strong> <small>@gardenk</small>{" "}
                            <small>31m</small>
                            <button  
                            onClick={() => onClickDelete(comment.id)}
                            className="button is-ghost">삭제</button>
                            <button 
                            onClick={() => makeInput(comment, comment.id)}
                            className="button is-ghost">수정</button>
                              {comment.input === 1 ? (
                                <div key={comment.id}>
                                <input
                                    onChange={(e) =>
                                    setUpdatedTitle({
                                        ...comment,
                                        content: e.target.value,
                                        input: 0,
                                    })
                                    }></input>

                                    <button
                                        onClick={() => onClickUpdate(comment.id, updatedTitle)}>
                                        수정완료
                                    </button>
                                    </div>
                                  ) : null}
                                   <br />
                                                
                                        {comment.content}
                                            </p>
                                        </div>
                                    </CommentListBox>
                                </CommentListContainer> 
                            ))}   
                                    
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