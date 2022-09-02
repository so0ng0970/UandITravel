import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css";
import 'bulma/css/bulma.min.css';
import './button.css';
const Form = () => {




    return (
        
      <>
      <div class="file has-name is-fullwidth">
  <label class="file-label">
    <input class="file-input" type="file" name="resume"/>
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
    <span class="file-name">
      Screen Shot 2017-07-29 at 15.54.25.png
    </span>
  </label>
</div>
<br/>
    <fieldset disabled>
    <label class="label"></label>
    <div class="control has-icons-left">
  <div class="select">
    <select>
      <option selected>City</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <div class="icon is-small is-left">
    <i class="fas fa-globe"></i>
  </div>
</div>
  <div class="field">
    <label class="label">작성자</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g Alex Smith"/>
    </div>
  </div>
  
  <div class="field">
    <label class="label">여행날짜</label>
    <div class="control">
      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>

    
  </div>

  <div class="field">
    <label class="label">MBTI</label>
    <div class="control">
      <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
   
    
  </div>
  

  <div class="field">
    <label class="label">Email</label>
    <textarea class="textarea" placeholder="e.g. Hello world"></textarea>

  </div>
  

  <div class="field">
  <button class="button is-dark">작성완료!&nbsp;&nbsp;&nbsp;   
    <h1>
   
    <span>.</span>
    &nbsp;
    <span>.</span>
    &nbsp;
    <span>.</span>

  <span>🚅</span>

</h1></button>
     </div>

  
  </fieldset>
  
    
  
  </>
    );

    
};





export default Form;