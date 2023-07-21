import { isLoggedInVar } from '../apollo';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </div>
  );
}

//const Login = () => <h1>Login</h1>;
export default Login;
