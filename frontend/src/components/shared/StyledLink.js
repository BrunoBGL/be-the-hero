import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #41414D;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity .2s;

  :hover {
    opacity: .8;
  }

  svg {
    margin-right: 10px;
  }
`;