import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { v4 as uuidv4} from "uuid";

const AddTodoWrapper = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0 5px 20px 1px rgba(0,0,0,0.1);
    form {
        border-radius:6px;
        width: 100%;
        height:3em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: white;
        #set-task {
            align-self: center;
            height: 100%;
            width: 2em;
            margin: 17px 10px 17px 16px;
            opacity: 0.4;
        }
        #create-task{
            width:100%;
            border: none;
            text-align: left;
            color: ${props=> props.theme.light.DarkGrayishBlue};
            font-size: 12px;
            font-weight: 400;
            font-family: 'Josefin Sans', sans-serif;
        }
    }
`
function AddTodo() {

    const [tasks, setTasks ] = useContext(ToDoContext)
    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(taskValue === "") return
        // console.log(tasks)
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                name: taskValue,
                completed:false,
            },
        ])
        setTaskValue("")
    }

    const handleTaskValue = (e)=> {
        e.preventDefault()
        setTaskValue(e.target.value)
    }

    return (
        <AddTodoWrapper>
            <div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="radio" id="set-task" onClick={handleSubmit} checked={false}/>
                    <input value={taskValue} onChange={handleTaskValue} type="text" placeholder='Create a new todo...' id="create-task"/>

                </form>
             </div>
        </AddTodoWrapper>
    )
}

export default AddTodo;