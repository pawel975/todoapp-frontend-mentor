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
    display:flex;
    flex-direction: column;
    align-items:stretch;
    section {
        height:10px;
        display:flex;
        justify-content: space-between;
        padding:1em 1em;
        position: relative;
        align-items:center;
        span {
            font-size: 12px;
            color: ${props=> props.theme.light.clear};
        }
    }
`

const TaskFilters = styled.ul`
        background-color:white;
        box-shadow: 0px 15px 40px 10px rgba(0,0,0,0.1);
        border-radius: 5px;
        display: flex;
        font-size: 14px;
        font-weight:700;
        list-style:none;
        align-items: center;
        justify-content:center;
        padding: 0;
        width:100%;
        li {
            margin:1em;
            color:${props=> props.theme.light.textFilters};
            opacity:0.7;
        }
        li:hover{
            opacity:1;
            cursor: pointer;
            color:hsl(220, 98%, 61%);
        }
`

const DragAndDrop = styled.div`
        h5{
        color: ${props => props.theme.light.clear};
        font-weight: 400;
        }
`

const TaskList = () => {

    const [tasks, setTasks] = useContext(ToDoContext)

    const AllTasks = tasks.map(task=>(
        <Task id={task.id} key={task.id} name={task.name} completed={task.completed}/>
    ))
    return(
        <>
            {AllTasks.length > 0 ? 
            <>
                <TaskListWrapper>
                    {AllTasks}
                    <section>
                        <span>{`${AllTasks.length} items left`}</span>
                        <span>Clear Completed</span>
                    </section>
                </TaskListWrapper>
                <TaskFilters>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </TaskFilters>
                <DragAndDrop>
                    <h5>Drag and drop to reorder the list</h5>
                </DragAndDrop>
                </>
                    : null}
        </>
    )
}

export default TaskList;