import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styled from 'styled-components';
import Header from '../Header/Header';
import Image from '../../../src/images/bg-mobile-light.jpg';
import TaskList from '../TaskList/TaskList';
import {ToDoProvider} from '../ToDoContext/ToDoContext'

const AppWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245,250,250);
  img {
      width: 100vw;
      height: auto;
  };
  main {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:90%;
    height: 100%;
    position: absolute;
    top: 5em;
  }
`


function App() {
  return (
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

  );
}

export default App;
