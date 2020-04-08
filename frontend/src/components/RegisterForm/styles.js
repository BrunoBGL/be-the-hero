import styled from 'styled-components';

export const InputGroup = styled.div`
  display:flex; 

  input + input {
    width: 80px;
    margin-left: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;