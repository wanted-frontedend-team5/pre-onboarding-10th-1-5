import { useNavigate } from 'react-router';
import validationEmail from '../../utils/validationEmail';
import validationPassword from '../../utils/validationPassword';
import Input from '../../components/Input';
import authApi from '../../Api/auth';
import useInputValidation from '../../hooks/useInputValidation';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

function SignUp() {
  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation(
    '',
    validationEmail,
  );

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
      await authApi.signUp(pathData);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl">Sign Up</h1>
      <form className="space-y-1">
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
          errorMessage={isPasswordSuccess.errorMessage}
        />
        <ErrorMessage errorMessage={isPasswordSuccess.errorMessage} />
        <Button
          onClick={handleClick}
          data-testid="signup-button"
          isSuccess={isSuccess}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
