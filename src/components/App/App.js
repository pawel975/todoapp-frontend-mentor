import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import Image from '../../../src/images/bg-mobile-light.jpg';
import TaskList from '../TaskList/TaskList';
import {ToDoProvider} from '../ToDoContext/ToDoContext'


const theme = {
  light: {
    background: 'hsl(0, 0%, 98%)',
    VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
    LightGrayishBlue: 'hsl(233, 11%, 84%)',
    DarkGrayishBlue: 'hsl(236, 9%, 61%)',
    VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
  },
  dark : {
    background: 'hsl(235, 21%, 11%)',
    // VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
    text0: 'hsl(234, 39%, 85%)',
    text1: 'hsl(236, 33%, 92%)',
    text2: 'hsl(234, 11%, 52%)',
    text3: 'hsl(233, 14%, 35%)',
    section: 'hsl(237, 14%, 26%)',
}
}

const AppWrapper = styled.div`
  
  font-family: 'Josefin Sans', sans-serif;
  height: 100vh;
  outline: 5px solid green;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props=> props.theme.light.background};
  img {
      width: 100%;
      height: auto;
  };
  main {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:90%;
    height: auto;
    position: relative;
    top: -6em;
  }
`


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoProvider>
        <AppWrapper>
          <img src={Image} alt=""/>
          <main>
            <Header/>
            <AddTodo />
            <TaskList/>
          </main>
        </AppWrapper>
      </ToDoProvider>
    </ThemeProvider>

  );
}

export default App;
