import React from 'react';
import styled from 'styled-components';



const StyledTask = styled.div`
    color:#364F6B;
    font-size:1.4rem;
    margin:2rem 1rem 0rem 2rem;
    display:flex;
    justify-content:space-between;
`;
const TimeStamp = styled.span`
    display:block;
    font-size:.9rem;
    margin-top:.4rem;
`;


const TaskButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.2rem solid #fc5185;
  cursor: pointer;
  transition:all .2s;

  &:hover {
    background-color: #fc5185;
  }
`;



const Task = (props) => {


    return (
        <StyledTask> 
            <div>
            {props.children}

            <TimeStamp> 15 min ago </TimeStamp> 
            </div>
            <TaskButton/>
        </StyledTask>
    )
}

export default Task;