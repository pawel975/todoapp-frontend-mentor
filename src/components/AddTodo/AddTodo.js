import React from 'react'
import styled from 'styled-components';

const AddTodoWrapper = styled.div`
    width: 100%;
    height: auto;
    /* box-shadow: 0px 10px 30px 18px rgba(0,0,0,0.1); */
    label {
        border-radius:6px;
        /* overflow: hidden; */
        width: 100%;
        height:3em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: white;
        #set-task {
            align-self: center;
            height: 100%;
            width: 2em;
            margin: 17px 10px 17px 23px;
            opacity: 0.4;
        }
        #create-task{
            width:100%;
            border: none;
            text-align: left;
            opacity: 0.8;
            font-size: 12px;
            font-weight: 400;
            font-family: 'Josefin Sans', sans-serif;
        }
    }
`

function AddTodo() {
    return (
        <AddTodoWrapper>
            <div>
                <label>
                    <input type="radio" id="set-task" />
                    <input type="text" placeholder='Create a new todo...' id="create-task"/>
                </label>
             </div>
        </AddTodoWrapper>
    )
}

export default AddTodo;