import React, {useContext} from 'react';
import styled from 'styled-components'
import { ToDoContext } from '../ToDoContext/ToDoContext';

const TaskWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height:3em;
    display:flex;
    align-items:center;
    border-bottom: 1px solid ${props=> props.theme.finished};
    transition:0.3s ease-in;
    svg{
        display:block;
        cursor: pointer;
        padding: 0.5em 1em;
        background-color: ${props=> props.theme.taskBackground};
        transition:0.3s ease-in;
        }
    .custom-checkbox {
        cursor: pointer;
        width: 100%;
        height:90%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        background-color: ${props=> props.theme.taskBackground};
        transition:0.3s ease-in;
        input {
            display:none;
        }
        span.checkmark {
            margin: 0 0 0 1.2em;
            width:20px;
            height:20px;
            border-radius:50%;
            border: 1px solid ${props=> props.theme.finished};
        }
        span.text {
            color: ${props=> props.theme.task};
            flex-grow:1;
            opacity:1;
            font-size: 12px;
            font-weight:400;
            padding: 0 0 0 .8em;
            height:inherit;
            display:flex;
            align-items:center;

        }
        .text.completed {
                text-decoration: line-through;
                opacity: 0.4;
            }
    }
    .custom-checkbox input:checked + .checkmark {
        background: linear-gradient(120deg,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
        width:22px;
        height:22px;
        border: none;
        
    }
    .check-icon {
        color:white;
        font-size: 10px;
        position:relative;
        transform: translate(-55%,-80%);
        top:50%;
        left:50%;
        width:fit-content;
        height:fit-content;
    }
`

const Task = ({id,name, completed}) => {

const [tasks, setTasks] = useContext(ToDoContext);

const handleChecked = (e) => {
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
            <label className="custom-checkbox">
                <input onClick={handleChecked} type="radio" checked={completed} />
                <span className="checkmark">
                    {completed? <i className="check-icon fas fa-check"></i> :null}
                    </span>
                <span className={`text ${completed? "completed" : null}`}>{name}</span>
            </label>
            <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
     </TaskWrapper>
    )
}

export default Task;