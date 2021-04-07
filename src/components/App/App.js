import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import ImageMobileLight from '../../../src/images/bg-mobile-light.jpg';
import ImageMobileDark from '../../../src/images/bg-mobile-dark.jpg';
import ImageDesktopLight from '../../../src/images/bg-desktop-light.jpg';
import ImageDesktopDark from '../../../src/images/bg-desktop-dark.jpg';
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props=> props.theme.background};
  transition:0.3s ease-in;
  img.mobile {
      display:initial;
      width: 100%;
      height: auto;
  };
  img.desktop {
    width:100%;
    display:none;
  } 
  main {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:90%;
    height: auto;
    position: relative;
    top: -5em;
  }

  @media (min-width: 350px) {
    main {
      top:-7em;
    }
  }

  @media (min-width:500px) {
    img.mobile {
      display:none;
      width: 100%;
      height: auto;
  };
    img.desktop {
    display:initial;
  };
  main {
    max-width:500px;
    top:-3.5em;
  }
  }

  @media (min-width:700px) {
    main {
      top:-6em;
    }
  }

  @media (min-width:1000px) {
    main {
      top:-10em;
    }
  }
`
function App() {

  const [theme, setTheme] = useState("dark");

  return (
      <ToDoProvider>
        <ThemeProvider theme={themes[theme]}>
        <AppWrapper>
          <img className="mobile" src={theme==="light"? ImageMobileLight : ImageMobileDark } alt=""/>
          <img className="desktop" src={theme==="light"? ImageDesktopLight : ImageDesktopDark } alt=""/>
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
