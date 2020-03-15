import React from 'react';
import styled from 'styled-components';



const ButtonContainer = styled.div`
    grid-column: 2/3;
    grid-row:4/5;
    display:flex;
    justify-content:center;

`;


const StyledButton = styled.div`
  padding: 1rem 2rem;
  background-color: white;
  color: #fc5185;
  margin: 0 1rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    color: #364f6b;
  }

  &:active {
      transform: translateY(2px);
  }
`;

const Buttons = (props) => {

    return (
        <ButtonContainer>
            <StyledButton>show active</StyledButton>
            <StyledButton>clear completed</StyledButton>
        </ButtonContainer>
    )
}

export default Buttons;