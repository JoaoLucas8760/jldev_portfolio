import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 3rem 3rem;

  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 10rem;
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

export const BudgetButton = styled.button`
  padding: 1rem 3rem;
  margin: 5px;
  margin-top: 1rem;
  margin-left: -0.2rem;

  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Consolas, Courier New, monospace;
  border: solid #404c5d 1px;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  border-radius: 5px;
  background: linear-gradient(145deg, #2e2d2d, #212121);

  &:hover {
    box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    color: #d6d6d6;
    transition: 500ms;
  }

  &:active {
    box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    color: #d6d6d6;
    transition: 100ms;
  }
`;
