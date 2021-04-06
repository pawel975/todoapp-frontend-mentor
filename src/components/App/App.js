import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import ImageLight from '../../../src/images/bg-mobile-light.jpg';
import ImageDark from '../../../src/images/bg-mobile-dark.jpg';
import TaskList from '../TaskList/TaskList';
import {ToDoProvider} from '../ToDoContext/ToDoContext';

const LightTheme = {

    background: 'hsl(0, 0%, 98%)',
    taskBackground: "white",
    clearAndFilter: 'hsl(236, 9%, 61%)',
    finished: 'hsl(233, 11%, 84%)',
    task: "black",
}

const DarkTheme = {
    background: 'hsl(235, 21%, 11%)',
    taskBackground: "hsl(235, 24%, 19%)",
    clearAndFilter: 'hsl(234, 11%, 52%)',
    finished: 'hsl(237, 14%, 26%)',
    task: "hsl(234, 39%, 85%)",
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
  transition:0.3s ease-in;
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
    top: -7em;
  }
`
function App() {

  const [theme, setTheme] = useState("dark");

  return (
      <ToDoProvider>
        <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <img src={theme==="light"? ImageLight : ImageDark } alt=""/>
          <main>
            <Header theme={theme} setTheme={setTheme} />
            <AddTodo />
            <TaskList/>
          </main>
        </AppWrapper>
        </ThemeProvider>
      </ToDoProvider>
  );
}

export default App;
