import React,{useState} from 'react';
import styled from 'styled-components';

import AddIcon from '../Icons/AddIcon';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';

const StyledIcon = styled(AddIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
   &:hover {
    transform: scale(1.1);
  }
`;

const Hiddensubmit = styled.input`
    display:none;
`;

const TextFieldContainer = styled.div`
    display:grid;
    grid-column:2 / 3;
    grid-row: 2 / 3;
    padding:.5rem 1rem;
    border-radius:3rem; 
    background-color:white;
   
`;

const StyledInput = styled.input`
  width: 80%;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  font-weight: lighter;
  color: #364f6b;
`;

const StyledForm = styled.form`
   display:flex;
   justify-content:space-between;
`;

const AddTask = (props) => {

    const [text,setText] =  useState('');

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        props.addTask(text,props.tasks.length);
        event.preventDefault();
        setText('');
    }

    return (
        <TextFieldContainer>
            <StyledForm onSubmit={handleSubmit} >
                <StyledInput 
                placeholder="enter your task" 
                type="text"
                onChange={handleChange}
                value={text}
                /> 
                <label>
                    <Hiddensubmit type="submit"/>
                    <StyledIcon/>
                </label>
            </StyledForm>
        </TextFieldContainer>
    )
}


const mapStateToProps = state => ({
    tasks:state.tasks,
})


const mapDispatchToProps = {
    addTask,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
