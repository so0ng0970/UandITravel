import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (
<Header01>
  <h1>(페이지이름)</h1>
  <nav>
    <ul>

    <button class="button is-ghost">ʜᴏᴍᴇ</button>  
    <button class="button is-ghost">ʟᴏɢɪɴ</button>

    <button onClick={()=> navigate(`/form`)} class="button is-ghost">ᴡʀɪᴛᴇ</button>

    </ul>
  </nav>
</Header01>


    );
}

const Header01 = styled.div `

color: #003dad;
height: 120px;
padding-left:120px;
padding-right: 90px;
display: flex;
justify-content: space-between;
align-items: center;
/* border-radius:  0px 0 8px  8px ;  */
position: sticky;
padding-top: 30px;
top: -30px;
`;

export default Header ;