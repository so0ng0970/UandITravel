

import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"


import './Button.css';
const Form = () => {




    return (
        
      <>
      <div>
 <Card className="card">
        <Card01 className="card-body">
     

     
      <div  className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="resume"/>
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
            </span>
            <span className="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div >
        <br/>
          
            <label className="label"></label>
            <div className="control has-icons-left">
          <div className="select">
            <select placeholder="City">
              <option selected>City</option>
              <li>dmd</li>
              <option>응?</option>
          
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </div>
        </div>

        
          <Card02  className="field">
            <label className="label">작성자</label>
            <div className="control">
              <Input className="input" type="text" placeholder="e.g Alex Smith"/>
            </div>
          </Card02 >
          
          <Card02 className="field">
            <label className="label">여행날짜</label>
            <div className="control">
              <Input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>

            
          </Card02 >

          <Card02  className="field">
            <label className="label">MBTI</label>
            <div className="control">
              <Input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
          
            
          </Card02 >
  

          <Card02 className="field">
            <label className="label">Email</label>
            < Textarea className="textarea" placeholder="e.g. Hello world"></ Textarea>

          </Card02 >
          

          <Buttonu  className="field">
            <br/>
            <br/>
            <br/>
          <Button className="button"><h >작성완료</h>&nbsp;&nbsp;&nbsp;   
                      <h1>
                    
                      <span>.</span>
              &nbsp;
              <span>.</span>
              &nbsp;
              <span>.</span>

            <span>🚅</span>

          </h1></Button>

              </Buttonu>


              </Card01>
      </Card>

      
           </div>   
            


        </>
          );

          
};


const Input = styled.input`
 
  background-color: #e8feff96;
`;
const Textarea = styled.textarea `
 
  background-color: #e8feff96;
`;
const Button = styled.button `
   
  background-color: #0165fc68;
`;
const Card = styled.div`
background-size: cover;
  position: absolute;
  background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif);
  overflow: hidden;
 margin: 50px 250px;
  position:
  relative;
 

content: center;
 
   
`;



const Card01 = styled.div`

margin: auto
`;
const Card02 = styled.div`
height: 120px;
margin: 20px
`;
const Buttonu= styled.div`
height: 100px;
margin: 20px
`;

export default Form;