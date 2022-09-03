import logo from './logo.svg';
import './App.css';
import Form from "./components/travelform/Form"
import Header from "../src/components/header/Header"
import styled from "styled-components"
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Background> 
       <Header/>
   <Div>
    <Form/>
 
   
   </Div>
    </Background>
    </div>
  );
}

const Background = styled.div`
overflow: auto;
height: 110vh;
background-size: cover;
  background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif) ;;

`;


const Div = styled.div`
overflow: auto;
height: 100vh;
margin: 10px 100px;

background-color: #ffffffd0;
border-radius: 10px 

`

export default App;