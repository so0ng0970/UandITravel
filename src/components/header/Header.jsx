import React from 'react';
import styled from "styled-components"
const Header = () => {
    return (
<Header01>
  <h1>로고</h1>
  <nav>
    <ul>
      <li>메뉴1</li>
      <li>메뉴2</li>
      <li>메뉴3</li>
    </ul>
  </nav>
</Header01>


    );
}

const Header01 = styled.div `
background: #004E75;
color: white;
padding-left: 32px;
padding-right: 32px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius:  0px 0 8px  8px ; 
position: sticky;
padding-top: 32px;
top: -32px;
`;

export default Header ;