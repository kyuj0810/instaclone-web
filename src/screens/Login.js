function Login({ setIsLoggendIn }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsLoggendIn(true)}>Log in now!</button>
    </div>
  );
}

//const Login = () => <h1>Login</h1>;
export default Login;
