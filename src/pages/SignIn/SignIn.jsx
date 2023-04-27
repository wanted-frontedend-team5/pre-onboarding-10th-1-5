import { useNavigate } from 'react-router-dom';
import validationEmail from '../../utils/validationEmail';
import validationPassword from '../../utils/validationPassword';
import authApi from '../../api/auth';
import Input from '../../components/inputs/Input';
import SubmitButton from '../../components/buttons/SubmitButton';
import ErrorMessage from '../../components/ErrorMessage';
import useInputValidation from '../../hooks/useInputValidation';
import {
  getUserTokenInLocalStorage,
  putUserTokenInLocalStorage,
} from '../../utils/localTokenUtils';

function SignIn() {
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
      const data = await authApi.signIn(pathData);
      putUserTokenInLocalStorage(data.access_token);
      if (getUserTokenInLocalStorage()) navigate('/todo');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-full">
      <h1 className="text-3xl">Sign In</h1>
      <form className=" space-y-1" onSubmit={handleClick}>
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
        <SubmitButton data-testid="signin-button" isSuccess={isSuccess}>
          Sign In
        </SubmitButton>
      </form>
    </div>
  );
}

export default SignIn;
