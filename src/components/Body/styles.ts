import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 3rem 3rem;

  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 2rem;
`;

export const TextName = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 3.4rem;
  color: #5222d0;
  margin-left: -0.8rem;
`;

export const Role = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #828282;
`;

export const Box = styled.div``;
