import styled from 'styled-components';

// Title é um componente react de estilização, usado com um texto
export const Title = styled.h1`
  background: green;
  color: ${(props) => (props.isRed ? 'red' : 'none')};
  small {
    font-size: 12pt;
    margin-left: 15px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 30px;
`;
