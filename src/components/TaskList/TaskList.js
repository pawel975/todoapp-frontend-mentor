import React, { useContext } from 'react';
import styled from 'styled-components';
import {ToDoContext} from '../ToDoContext/ToDoContext';
import Task from '../Task/Task'

const TaskListWrapper = styled.div `
    margin-top: 1em;
    border-radius:5px;
    width: 100%;
    height:auto;
    box-shadow: 0px 15px 40px 10px rgba(0,0,0,0.1);
    outline: solid 2px green;
    display:flex;
    flex-direction: column;
    align-items:stretch;
    ul {
        display: flex;
        font-size: 14px;
        font-weight:700;
        width: auto;
        height:auto;
        list-style:none;
        align-items: center;
        justify-content:center;
        outline: solid 2px yellow;
        padding: 0em;
        margin:0;
        li {
            margin:1em;
            
            /* outline: solid 2px blue; */
        }
    }
    section {
         outline: solid 2px blue;
        /* padding: 1em; */
        display:flex;
        justify-content: space-around;
        span {
            font-size: 12px;
        }
    }
`

const TaskList = () => {

    const [tasks, setTasks] = useContext(ToDoContext)

    const AllTasks = tasks.map(task=>(
        <Task name={task.name} active={task.active} completed={task.completed}/>

    ))

//Utworzyć 2 ul dla wersji mobilnej, osobno na dla clear i items left i osobno dla reszty

    return(
        <TaskListWrapper>
            {AllTasks.length > 0 ? 
                <div>
                    {AllTasks}
                    <section>
                        <span>{`${AllTasks.length} items left`}</span>
                        <span>Clear Completed</span>
                    </section>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                </div>
                    : null}
        </TaskListWrapper>
    )
}

export default TaskList;