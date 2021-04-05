import React, {useContext, useState } from 'react';
import styled from 'styled-components'
import { ToDoContext } from '../ToDoContext/ToDoContext';

const TaskWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    border-bottom: 0.5px solid rgba(0,0,0,0.1);
    /* outline: 2px solid blue; */
    svg{
            /* outline: 2px solid green; */
            height:100%;
            padding:0.8em;
            opacity:0.7;
        }
    label {
        border-radius:6px;
        width: 100%;
        height:3em;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        background-color: white;
        input {
            height: inherit;
            width: 1.6em;
            margin:0 0 0.1em 1.2em;
            opacity: 0.4;
            /* outline:2px solid purple; */
        }
        span {
            flex-grow:1;
            opacity:0.6;
            font-size: 12px;
            font-weight:700;
            padding: 0 0 0 .8em;
            /* outline:2px solid purple; */
            height:inherit;
            display:flex;
            align-items:center;

        }
        .completed {
                text-decoration: line-through;
                opacity: 0.3;
            }
    }
`

const Task = ({id,name, completed}) => {

const [tasks, setTasks] = useContext(ToDoContext);
const [checked, setChecked] = useState(false);

const handleChecked = (e) => {
    setChecked(!checked)
    const index = e.target.parentNode.parentNode.id;
    const tempTasks = [...tasks];
    setTasks(
    tempTasks.map(item => {
        if (item.id === index) {
        return {
            ...item,
            completed: !completed,
        }
        } else {
        return item
        }
    })
)
}

const handleDelete = (e) => {
    const index = e.target.parentNode.id;
    let tempTasks = [...tasks];
    setTasks(tempTasks.filter(item => item.id !== index))
    }

    return(
        <TaskWrapper id={id} completed={completed}>
            <label>
                <input onClick={handleChecked} type="radio" checked={checked} />
                <span className={completed? "completed" : null}>{name}</span>
            </label>
            <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
     </TaskWrapper>
    )
}

export default Task;