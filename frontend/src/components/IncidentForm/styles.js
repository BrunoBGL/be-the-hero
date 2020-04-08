import styled from "styled-components";
import { buttonStyle } from '../shared/Button';

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 20px;
  width: 100%;
  margin: 10px 0;
  min-height: 140px;
  background: #FFF;
  color: #333;
  border-radius: 8px;
  border: 1.5px solid #DCDCE6;
  font-size: 18px;
  resize: vertical;
`;

export const ButtonSecondary = styled.button`
  ${buttonStyle}
  width: 250px;
  border: 2.5px solid #DCDCE6;
  background: none;
  color:  #41414D;
  font-weight: bold;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;

  button + button {
    margin-left: 20px;
  }
`;
