import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { v4 as uuidv4} from "uuid";

const AddTodoWrapper = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0 5px 20px 1px rgba(0,0,0,0.1);
    transition:0.3s ease-in;
    form {
        cursor: pointer;
        border-radius:6px;
        height:3em;
        display: flex;
        justify-content: center;
        background-color: ${props=> props.theme.taskBackground};
        transition:0.3s ease-in;
        label {
            display:flex;
            height:100%;
            width:50px;
        }
        .set-task {
            display:none;
        }
        .create-task{
            border-radius:5px;
            cursor: pointer;
            width:100%;
            border: none;
            text-align: left;
            background-color: ${props=> props.theme.taskBackground};
            color: ${props=> props.theme.clearAndFilter};
            font-size: 12px;
            font-weight: 400;
            font-family: 'Josefin Sans', sans-serif;
            transition:0.3s ease-in;
        }
        .checkmark {
            cursor: pointer;
            border: 1px solid ${props=> props.theme.finished};
            align-self: center;
            height: 20px;
            width: 20px;
            border-radius:50%;
            margin: 17px 10px 17px 18px;
            transition:0.3s ease-in;
        }
    }
`
function AddTodo() {

    const [tasks, setTasks, filteredTasks, setFilteredTasks, status, setStatus ] = useContext(ToDoContext)
    
    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(taskValue === "") return
        // console.log(tasks)
        setStatus(0)
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
                        <button className="set-task" onClick={handleSubmit}></button>
                        <span className="checkmark"></span>
                    </label>
                    <input value={taskValue} onChange={handleTaskValue} type="text" placeholder='Create a new todo...' className="create-task"/>
                </form>
             </div>
        </AddTodoWrapper>
    )
}

export default AddTodo;