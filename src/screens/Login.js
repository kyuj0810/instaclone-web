import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';
import routes from '../routes';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm(); //register : input을 위해 state, onChage,value설정하는데 도움을 줌.
  const onSubmitValid = (data) => {
    console.log(data);
  };

  const onSubmitInValid = (data) => {
    console.log(data, 'invalid');
  };

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInValid)}>
          <Input
            {...register('username', {
              required: 'Username is required',
              minLength: 5,
              validate: (cureentValue) => cureentValue.includes('potato'),
            })}
            type="text"
            placeholder="Username"
          />
          <Input
            {...register('password', { required: 'Password is required' })}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" value="Log in" />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>

      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}

//const Login = () => <h1>Login</h1>;
export default Login;

/**
 * react router dom의 Link 컴포넌트는 a href를 돌려줌.
 *
 */
