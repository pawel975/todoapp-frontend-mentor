import React, {useContext} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import Image from '../../../src/images/bg-mobile-light.jpg';
import TaskList from '../TaskList/TaskList';
import {ToDoContext, ToDoProvider} from '../ToDoContext/ToDoContext'


const LightTheme = {

    background: 'hsl(0, 0%, 98%)',
    finished: 'hsl(233, 11%, 84%)',
    clear: 'hsl(236, 9%, 61%)',
    textFilters: 'hsl(235, 19%, 35%)',
}

const DarkTheme = {
    background: 'hsl(235, 21%, 11%)',
    finished: 'hsl(234, 39%, 85%)',
    clear: 'hsl(236, 33%, 92%)',
    textFilters: 'hsl(234, 11%, 52%)',
    text3: 'hsl(233, 14%, 35%)',
    section: 'hsl(237, 14%, 26%)',
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const AppWrapper = styled.div`
  
  font-family: 'Josefin Sans', sans-serif;
  min-height: 100vh;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props=> props.theme.background};
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
  const [theme, setTheme] = useContext(ToDoContext)
  return (
    <ThemeProvider theme={themes[theme]}>
      <ToDoProvider theme={theme} setTheme={setTheme}>
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
