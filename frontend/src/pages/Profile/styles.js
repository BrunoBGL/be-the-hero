import styled from 'styled-components';
import { buttonStyle } from '../../components/shared/Button';
import { Link } from 'react-router-dom';

export const ContainerProfile = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 32px auto;
  padding: 0 30px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  
  img {
    height: 64px;
  }
`;

export const ButtonLink = styled(Link)`
  ${buttonStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 260px;
  text-decoration: none;
`;

export const ButtonLogout = styled.button`
  margin-left: 24px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 1.5px solid #DCDCE6;
  transition: filter .5s;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }
`;

export const Text = styled.span`
  margin-left: 48px;
  font-size: 20px;
  line-height: 18px;
`;

export const Title = styled.h1`
  margin: 80px 0 24px 0;
  font-size: 32px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const ItemCard = styled.li`
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  position: relative;

  p + strong {
    margin-top: 32px;
  }
`;

export const TextStrong = styled.strong`
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  color: '#41414d';
`;

export const TextDescription = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #737380;
`;

export const ButtonDelete = styled.button` 
  position: absolute;
  top: 24px;
  right: 24px;
  border: 0;
  cursor: pointer;
  transition: filter;

  :hover {
    filter: brightness(90%);
  }
`;