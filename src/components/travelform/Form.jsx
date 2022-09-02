

import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"


import './Button.css';
const Form = () => {




    return (
        
      <>

      <div className="file has-name is-fullwidth">
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
        </div>
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
          <div className="field">
            <label className="label">작성자</label>
            <div className="control">
              <Input className="input" type="text" placeholder="e.g Alex Smith"/>
            </div>
          </div>
          
          <div className="field">
            <label className="label">여행날짜</label>
            <div className="control">
              <Input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>

            
          </div>

          <div className="field">
            <label className="label">MBTI</label>
            <div className="control">
              <Input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
          
            
          </div>
  

          <div className="field">
            <label className="label">Email</label>
            < Textarea className="textarea" placeholder="e.g. Hello world"></ Textarea>

          </div>
          

          <div className="field">
          <Button className="button"><h >작성완료!</h>&nbsp;&nbsp;&nbsp;   
                      <h1>
                    
                      <span>.</span>
              &nbsp;
              <span>.</span>
              &nbsp;
              <span>.</span>

            <span>🚅</span>

          </h1></Button>
              </div>


            
              
            
        </>
          );

          
};

const Input = styled.input`
 
  background-color: #DEE6EB;
`;
const Textarea = styled.textarea `
 
  background-color: #DEE6EB;
`;
const Button = styled.button `
 
  background-color: #004E75;
`;




export default Form;