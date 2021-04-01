import React, { useContext } from 'react';
import styled from 'styled-components';
import {ToDoContext} from '../ToDoContext/ToDoContext';
import Task from '../Task/Task'

const TaskListWrapper = styled.div `
    width: 100%;
    height:100px;
    ul {
        display: flex;
        background-color: red;
        width: 100%;
        height:100px;
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
                    <span>{`${AllTasks.length} items left`}</span>
                    <button>Clear Completed</button>
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