import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const LastProjectsText = styled.h1`
  display: flex;
  align-self: center;
  font-family: "Bebas Neue", cursive;
  font-weight: 200;
  opacity: 20%;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  flex-wrap: wrap;
`;
