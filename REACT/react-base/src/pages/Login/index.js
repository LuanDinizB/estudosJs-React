import React from 'react';

// Title é um componente react de estilização,
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Teste em baixo de login</small>
      </Title>
      <Paragrafo> Teste </Paragrafo>
      <button type="button"> Enviar </button>
    </Container>
  );
}
