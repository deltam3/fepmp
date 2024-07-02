"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  item: {
    link: string;
    title: string;
    description: string;
  };
}

const moveUpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const StyledProblemItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  gap: 1.6rem;
  border: 0.8rem solid var(--color-grey-900);

  &:hover {
    background-color: var(--color-grey-200);
    cursor: pointer;
    animation: ${moveUpAnimation} 0.3s forwards;
  }
`;

const ProblemItem = ({ item: { link, title, description } }: Props) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`${link}`);
  };
  return (
    <StyledProblemItem onClick={onClickHandler}>
      <Link href={link}>{title}</Link>
      <p>{description}</p>
    </StyledProblemItem>
  );
};

export default ProblemItem;
