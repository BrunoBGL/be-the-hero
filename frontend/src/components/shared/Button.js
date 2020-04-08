import styled, { css } from 'styled-components';

export const buttonStyle = css`
  margin: 15px 0;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background: #E02041;
  color: #F0F0F5;
  border: none;
  font-size: 18px;
  transition: filter 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export const Button = styled.button`
  ${buttonStyle}
`;
