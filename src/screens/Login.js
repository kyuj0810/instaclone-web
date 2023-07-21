import { styled } from 'styled-components';
import { isLoggedInVar } from '../apollo';
import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h1`
  color: ${(props) => (props.potato ? 'palevioletred' : 'beige')};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ${(props) =>
    props.potato
      ? `
          font-size: 60px;
        `
      : `
          text-decoration: underline;
        `}
`;

const Container = styled.div`
  background-color: tomato;
`;

const TogglePotato = styled.button`
  color: red;
`;
function Login() {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current);
  return (
    <Container>
      <Title potato={potato}>Login</Title>
      <TogglePotato onClick={togglePotato}>TogglePotato</TogglePotato>
    </Container>
  );
}

//const Login = () => <h1>Login</h1>;
export default Login;
