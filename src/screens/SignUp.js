import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import routes from '../routes';
import { styled } from 'styled-components';
import { FatLink } from '../components/shared';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';
import FormError from '../components/auth/FormError';
import { gql, useMutation } from '@apollo/client';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $username: String!
    $email: String!
    $password: String!
    $lastName: String
  ) {
    createAccount(
      firstName: $firstName
      username: $username
      email: $email
      password: $password
      lastName: $lastName
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home, {
      message: 'Account created. Please log in.',
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: 'onChanged',
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({ variables: { ...data } });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <div>
          <HeaderContainer>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <Subtitle>
              Sign up to see photos and videos from your friends.
            </Subtitle>
          </HeaderContainer>
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('firstName', {
              required: 'First Name is required.',
            })}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input
            {...register('lastName', {
              required: 'Last Name is required.',
            })}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <FormError message={formState.errors?.lastName?.message} />
          <Input
            {...register('email', {
              required: 'Email is required.',
            })}
            name="email"
            type="text"
            placeholder="Email"
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register('username', {
              required: 'Username is required.',
            })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register('password', {
              required: 'Password is required.',
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? 'Loading...' : 'Sign up'}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>

      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
