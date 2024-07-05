import React from "react";
import styled, { keyframes } from "styled-components";
type Props = {};

const StyledAddContainer = styled.div`
  background-color: var(--timer-add-bg);
  /* padding: 10px; */
  cursor: pointer;
`;

const AddCountDownTimer = ({}: Props) => {
  return (
    <StyledAddContainer>
      <p>+</p>
    </StyledAddContainer>
  );
};

export default AddCountDownTimer;
