import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 3rem;

  align-items: center;
  justify-content: space-between;
`;

export const TextName = styled.h1`
  font-weight: 700;
  font-size: 2.1rem;
`;

export const Button = styled.h1`
  background: none;
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;

  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    color: rgba(188, 60, 216, 1);
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  background: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
