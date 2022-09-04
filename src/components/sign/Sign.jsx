import React from 'react';
import { Card } from 'react-bootstrap';
import styled from "styled-components";

const Sign= () => {
    return (

        <>
        
        <div className="card"style={{height:"80vh"}}>
       <Left class="left"style={{height:"82vh",width:"50%",float:"left"}}>
       
      </Left> 
      <Right  class="right"style={{height:"82vh", width:"50%",float:"right"}}>
        
        <Input1   className='input1' style={{marginTop:'250px'}}>
        <label className="label"></label>
        <input class="input" type="email" placeholder="🙂ID"/>
      <br/>
      <br/>
      <input class="input" type="email" placeholder="📨Email"/>
      <br/>
      <br/>

      <input class="input" type="password" placeholder="🔒Password">
     </input>
      <br/>
      <br/>
      <input class="input" type="password" placeholder="🔒Password check">
     </input>
     <br/>
      <br/>
      <button class="button is-medium is-fullwidth">ᴀᴄᴄᴏᴜɴᴛ</button>
  
       </Input1 >
   
        </Right > </div> 
         </>


 


        
    );
};

const Input1 = styled.div`
 margin: 320px 100px 0px 100px;

 box-sizing: border-box;
  

`;

const Left= styled.div`
  float: left;
  box-sizing: border-box;
  background-size : cover;
  background-position: center;
  background-repeat:no-repeat;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/881041ea-65fa-437a-b987-6f38f7b83b0f/image.jpg)

`;
const Right = styled.div`
   float: right;
    box-sizing: border-box;
    
    
    background: #8799c1;
    overflow: hidden;
    
    

`;






 

export default Sign;