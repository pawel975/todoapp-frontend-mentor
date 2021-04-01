import React from 'react';

const Task = ({name, active, completed}) => {
    return(
        <div>
            <label>
                <input type="radio"  />
                <h1>{name}</h1>
            </label>
     </div>
    )
}

export default Task;