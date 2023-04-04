import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const AboutText = styled.h1`
  display: flex;
  align-self: center;
  font-family: "Bebas Neue", cursive;
  font-weight: 200;
  opacity: 20%;
`;

export const BoxAbout = styled.div`
  padding: 3rem 4rem;
  background: #fff;
  max-width: 60rem;

  border-radius: 0.8rem;
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 0.85rem;
`;

export const TextAbout = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-family: "Inter", sans-serif;
  text-align: center;
  line-height: 1.6rem;
`;
