import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding:0.3em 0 1em 0;
  position: relative;
  top:-20px;
  width:100%;
  height:auto;
  outline: 2px solid red;
  display:flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin:0px;
    color: white;
    font-size: 25px;
    height:100%;
    /* outline: 2px solid blue; */
  }
  figure {
    /* outline: 2px solid green; */
    cursor: pointer;
    position: relative;
    height:auto;
    margin:0px;
  }
`


const Header = ()=> {
    return(
        <HeaderWrapper >
          <h1>T O D O</h1>
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
          </figure> 
        </HeaderWrapper>
  )
}

export default Header;