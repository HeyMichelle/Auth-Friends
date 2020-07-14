import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 2px solid #373737;
`;

export const StyledLink = styled(Link)`
  color: pink;
  text-decoration: none;
  font-size: 20px;
`;