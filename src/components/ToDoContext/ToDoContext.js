import React, {useState, createContext } from 'react';

export const ToDoContext = createContext()

export const ToDoProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [status, setStatus] = useState(0);
    return(
        <ToDoContext.Provider value={[tasks, setTasks, filteredTasks, setFilteredTasks, status, setStatus]}>
            {props.children}
        </ToDoContext.Provider>
    )
}