import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  padding: 0 0.5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.6rem;
  background: #eee;
  color: #191717;
  padding: 0 0.5rem;
  border: 1px solid #000;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: red;
  margin-top: 1rem;
`;

export const Img = styled.img`
  width: 200px;
  max-width: 50%;
  margin-bottom: 1rem;
  margin-top: -9rem;
`;
