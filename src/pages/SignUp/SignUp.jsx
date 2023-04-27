import { useNavigate } from 'react-router';
import validationEmail from '../../utils/validationEmail';
import validationPassword from '../../utils/validationPassword';
import Input from '../../components/Input';
import globalStyle from '../../utils/globalStyle';
import postSignUp from '../../apis/postSignUp';
import useInputValidation from '../../hooks/useInputValidation';

function SignUp() {
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
      await postSignUp(pathData);
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
          errorMessage={isEmailSuccess.errorMessage}
        />
        <Input
          type="password"
          label="Password"
          dataTestid="password-input"
          id="signup__password-input"
          value={password}
          onChange={handleChangePassword}
          errorMessage={isPasswordSuccess.errorMessage}
        />
        <button
          className={globalStyle.buttonStyle}
          onClick={handleClick}
          type="submit"
          data-testid="signup-button"
          disabled={isSuccess ? null : 'disabled'}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
