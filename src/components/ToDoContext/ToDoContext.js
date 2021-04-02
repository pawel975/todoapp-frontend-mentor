import React, {useState, createContext } from 'react';

export const ToDoContext = createContext()

export const ToDoProvider = props => {
    const [tasks, setTasks] = useState([
        {
            name: "Create a todo list",
            active: true,
            completed: true,
        },
        {
            name: "Style checkboxes",
            active: true,
            completed: true,
        }
    ])


    return(
        <ToDoContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </ToDoContext.Provider>
    )
}