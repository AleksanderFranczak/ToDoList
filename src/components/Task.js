import React from 'react';
import styled from 'styled-components';
import  {connect} from 'react-redux';
import {completeTask} from '../redux/actions';

const StyledTask = styled.div`
    color:#364F6B;
    font-size:1.4rem;
    margin:2rem 1rem 0rem 2rem;
    display:flex;
    justify-content:space-between;
    & p {
        margin:0;
        padding:0;
        text-decoration:${props =>
          props.completed ? "line-through" : "none"};
    }
`;
const TimeStamp = styled.span`
    display:block;
    font-size:.9rem;
    margin-top:.4rem;
    text-decoration:none;
`;


const TaskButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.2rem solid #fc5185;
  cursor: pointer;
  transition:all .2s;
  background-color:${props => props.completed? "#fc5185" : "none"};
  &:hover {
    background-color: #fc5185;
  }
`;



const Task = (props) => {
    let smallText = props.completed ? (
        `completed!`
    ) : (
        `${props.timestamp} min ago` 
    );

    console.log(props.key)
    return (
        <StyledTask completed={props.completed}> 
            <div>
            <p>
                {props.children}
            </p>

            <TimeStamp> {smallText} </TimeStamp> 
            </div>
            <TaskButton completed={props.completed} onClick={() => {props.completeTask(props.id)}}/>
        </StyledTask>
    )
}

const mapStateToProps = state =>({

});


const mapDispatchToProps = {
    completeTask,
}
export default connect(mapStateToProps,mapDispatchToProps)(Task);