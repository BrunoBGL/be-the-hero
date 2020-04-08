import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
