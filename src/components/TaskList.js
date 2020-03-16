import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
    overflow-y:auto;
`;


const TaskList = (props) => {
    return (
      <Container>
        {props.tasks.map(task => {
          if (!task.completed)
            return (
              <Task
                key={task.id}
                timestamp={task.timeStamp}
                id={task.id}
                completed={task.completed}
              >
                {task.text}
              </Task>
            );
        })}

        {props.tasks.map(task => {
          if (task.completed)
            return (
              <Task
                key={task.id}
                timestamp={task.timeStamp}
                id={task.id}
                completed={task.completed}
              >
                {task.text}
              </Task>
            );
        })}
      </Container>
    );
}

const mapStateToProps = (state) => ({
    tasks:state.tasks,
})
export default connect(mapStateToProps,)(TaskList);