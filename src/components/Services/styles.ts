import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceText = styled.h1`
  display: flex;
  align-self: center;
  font-family: "Bebas Neue", cursive;
  font-weight: 200;
  opacity: 20%;
`;

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxService = styled.div`
  padding: 3.1rem;
  background: #fff;
  width: 12rem;
  height: 10rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 0.85rem;
`;

export const IconBox = styled.div`
  padding: 0.8rem;
  border-radius: 0.6rem;
  background: #f5f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleService = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-family: "Inter", sans-serif;
`;

export const SubTitleService = styled.h1`
  font-size: 0.8rem;
  font-weight: 300;
  color: #000;
  font-family: "Inter", sans-serif;
  text-align: center;
`;
