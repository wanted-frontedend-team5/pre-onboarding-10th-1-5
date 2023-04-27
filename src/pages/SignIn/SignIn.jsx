import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validationEmail from '../../utils/validationEmail';
import validationPassword from '../../utils/validationPassword';
import authApi from '../../api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

function SignIn() {
  const [email, setEmail] = useState('');
  const [isEmailSuccess, setIsEmailSuccess] = useState({
    isSuccess: false,
    errorMessage: '',
  });
  const [password, setPassword] = useState('');
  const [isPasswordSuccess, setIsPasswordSuccess] = useState({
    isSuccess: false,
    errorMessage: '',
  });

  const isSuccess = isEmailSuccess.isSuccess && isPasswordSuccess.isSuccess;
  const navigate = useNavigate();

  const pathData = {
    email: '',
    password: '',
  };

  const handleChangeEmail = e => {
    const { value } = e.target;
    setEmail(value);
    validationEmail(value, setIsEmailSuccess);
  };

  const handleChangePassword = e => {
    const { value } = e.target;
    setPassword(value);
    validationPassword(value, setIsPasswordSuccess);
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
