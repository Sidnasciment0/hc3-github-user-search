import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  font-family: sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #eee;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #eee;
  color: #191717;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  padding: 0.5rem 0;
  background-color: #eee;
  color: #191717;
  text-decoration: none;
  border-radius: 0.5rem;
`;
