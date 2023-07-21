import { styled } from 'styled-components';
import { darkModeVar, isLoggedInVar } from '../apollo';
import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
}

//const Login = () => <h1>Login</h1>;
export default Login;
