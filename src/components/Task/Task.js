import React from 'react';
import styled from 'styled-components'
import close from '../../images/icon-cross.svg';

const TaskWrapper = styled.div`
    width: 100%;
    border-bottom: 0.5px solid rgba(0,0,0,0.1);
    label {
        border-radius:6px;
        overflow: hidden;
        width: 100%;
        height:3em;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        background-color: white;
        input {
            align-self: center;
            height: 100%;
            width: 1.6em;
            margin: 17px 10px 17px 21px;
            opacity: 0.4;
            /* outline:2px solid purple; */
        }
        span {
            flex-grow:1;
            opacity:0.6;
            font-size: 12px;
            font-weight:700;
            /* outline:2px solid purple; */
        }
        svg{
            margin: 0 1em 0 0;
        }
        
    }
`

const Task = ({name, active, completed}) => {
    return(
        <TaskWrapper>
            <label>
                <input type="radio"  />
                <span>{name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </label>
     </TaskWrapper>
    )
}

export default Task;