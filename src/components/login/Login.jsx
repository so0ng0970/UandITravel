import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
const Login = () => {
    return (

        <>
           <div className="card"style={{height:"82vh"}}>
      <Left01 className="left"style={{ height:"82vh",width:"50%",float:"left"}}>
       
      </Left01>
      <Right01 className="right"style={{height:"82vh", width:"50%",float:"right"}}>
        
        <Input2 className='input1' style={{marginTop:'300px'}}>
        <label className="label"></label>
        <input className="input" type="email" placeholder="🙂ID"/>
      <br/>
      <br/>
      
      <input className="input" type="password" placeholder="🔒Password">
     </input>
      <br/>
      <br/>
     
      <button className="button is-medium is-fullwidth">ʟᴏɢɪɴ</button>
       <div>
       <Link  to={`/sign`}>
       <a className="a" href="url"style={{height:"82vh",float:"right"}}> 회원가입</a>
        </Link>
        </div>
       </Input2>
   
      </Right01>
      </div>
       </>


 


        
    );
};

const Left01= styled.div`
  float: left;
  box-sizing: border-box;
  background-size : cover;
  background-position: center;
  background-repeat:no-repeat;
    background-image: url(https://i.pinimg.com/564x/16/90/f8/1690f8f5fb7e2bfbc557f4dc9a95143c.jpg)

`;
const Right01= styled.div`
    width: 50%;
    float: right;
    box-sizing: border-box;
    background: #8799c1;
    overflow: hidden;
`;
const Input2 = styled.div`
margin: 360px 100px 0px 100px;

 box-sizing: border-box;

`;


 

export default Login;