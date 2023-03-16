import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  background: #fff;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-sizing: border-box;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  max-width: 18.75rem;
`;

export const ProjectTitle = styled.h1`
  font-size: 0.9rem;
  color: #000;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

export const TecnologyText = styled.h1`
  padding: 0.3rem;
  border: 1px solid #eeee;
  border-radius: 0.2rem;

  font-size: 0.6rem;
  color: #000;
  opacity: 60%;
  font-weight: 400;
`;
