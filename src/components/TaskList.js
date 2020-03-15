import React from 'react';
import styled from 'styled-components';


//components 

import Task from './Task';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    grid-column:2/3;
    grid-row:3 / 4;
    width:100%;
    height:70vh;
    border-radius:2rem;
    background-color:white;
`;


const TaskList = (props) => {
    return (
        <Container>
            <Task>Learn react and styled components</Task>
            <Task>koń zwalony</Task>
        </Container>
    )
}


export default TaskList;