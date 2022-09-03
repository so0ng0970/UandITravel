import React from 'react';
import { Card } from 'react-bootstrap';
import './login.css';
import styled from "styled-components";
const Login = () => {
    return (

        <>
        
      <div class="left">
       
      </div>
      <div class="right">
        
        <div className='input1'>
        <label className="label"></label>
        <input class="input" type="email" placeholder="🙂ID"/>
      <br/>
      <br/>
      
      <input class="input" type="password" placeholder="🔒Password">
     </input>
      <br/>
      <br/>
      <button class="button is-medium is-fullwidth">ʟᴏɢɪɴ</button>
       <A className="a" href="url">회원가입</A>
       </div>
   
        </div>
         </>


 


        
    );
};

const A = styled.a`
  margin-left: 49vh;

`;



 

export default Login;