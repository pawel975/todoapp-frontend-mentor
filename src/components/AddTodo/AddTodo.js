import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { v4 as uuidv4} from "uuid";

const AddTodoWrapper = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0 5px 20px 1px rgba(0,0,0,0.1);
    form {
        cursor: pointer;
        border-radius:6px;
        width: 100%;
        height:3em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: white;
        label {
            display:flex;
            height:100%;
            width:50px;
        }
        .set-task {
            display:none;
        }
        .create-task{
            cursor: pointer;
            width:100%;
            border: none;
            text-align: left;
            color: ${props=> props.theme.clear};
            font-size: 12px;
            font-weight: 400;
            font-family: 'Josefin Sans', sans-serif;
        }
        .checkmark {
            cursor: pointer;
            border: 1px solid rgba(201, 203, 207, 1);
            align-self: center;
            height: 20px;
            width: 20px;
            border-radius:50%;
            margin: 17px 10px 17px 18px;
            opacity: 1;
            transition:2s;
        }

        .checkmark:hover {
            background: linear-gradient(120deg,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
            transition:2s ease-in;
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
                    <label>
                        <input type="radio" className="set-task" onClick={handleSubmit} checked={false}/>
                        <span className="checkmark"></span>
                    </label>
                    <input value={taskValue} onChange={handleTaskValue} type="text" placeholder='Create a new todo...' className="create-task"/>
                </form>
             </div>
        </AddTodoWrapper>
    )
}

export default AddTodo;