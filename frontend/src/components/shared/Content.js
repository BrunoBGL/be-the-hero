import styled from 'styled-components';

import { Container } from './Container';

export const Content = styled(Container)` 
  justify-content: space-between;
  height: auto;
  padding: 96px;
  background: #F0F0F5;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0 , 0.1);

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
