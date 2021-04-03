import React, {useState, createContext } from 'react';

export const ToDoContext = createContext()

export const ToDoProvider = props => {
    const [tasks, setTasks] = useState([])

    return(
        <ToDoContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </ToDoContext.Provider>
    )
}