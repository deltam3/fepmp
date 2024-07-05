import React from "react";
import styled, { keyframes } from "styled-components";
type Props = {};

const StyledAddContainer = styled.button`
  background-color: var(--timer-add-bg);
  width: 14rem;
  height: 14rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06);
`;

const AddCountDownTimer = ({ addTimer }: Props) => {
  return (
    <StyledAddContainer onClick={addTimer}>
      <p>+</p>
    </StyledAddContainer>
  );
};

export default AddCountDownTimer;
