import React, {useState, createContext } from 'react';

export const ToDoContext = createContext()

export const ToDoProvider = props => {
    const [tasks, setTasks] = useState([
        {
            name: "1241253",
            active: true,
            completed: true,
        },
        {
            name: "sfashaw",
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