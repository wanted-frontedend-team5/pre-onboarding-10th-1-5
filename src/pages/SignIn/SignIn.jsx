import { useNavigate } from 'react-router-dom';
import validationEmail from '../../utils/validationEmail';
import validationPassword from '../../utils/validationPassword';
import authApi from '../../Api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import useInputValidation from '../../hooks/useInputValidation';

function SignIn() {
  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation(
    '',
    validationEmail,
  );

  // eslint-disable-next-line operator-linebreak
  const [password, isPasswordSuccess, handleChangePassword] =
    useInputValidation('', validationPassword);

  const isSuccess = isEmailSuccess.isSuccess && isPasswordSuccess.isSuccess;
  const navigate = useNavigate();

  const pathData = {
    email: '',
    password: '',
  };

  const handleClick = async e => {
    e.preventDefault();
    pathData.email = email;
    pathData.password = password;
    try {
      const data = await authApi.signIn(pathData);
      localStorage.setItem('access_token', data.access_token);
      if (localStorage.getItem('access_token')) navigate('/todo');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-full">
      <h1 className="text-3xl">Sign In</h1>
      <form className=" space-y-1">
        <Input
          type="email"
          label="Email"
          dataTestid="email-input"
          id="signup__email-input"
          value={email}
          onChange={handleChangeEmail}
        />
        <ErrorMessage errorMessage={isEmailSuccess.errorMessage} />
        <Input
          type="password"
          label="Password"
          dataTestid="password-input"
          id="signup__password-input"
          value={password}
          onChange={handleChangePassword}
        />
        <ErrorMessage errorMessage={isPasswordSuccess.errorMessage} />
        <Button
          onClick={handleClick}
          data-testid="signin-button"
          isSuccess={isSuccess}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
