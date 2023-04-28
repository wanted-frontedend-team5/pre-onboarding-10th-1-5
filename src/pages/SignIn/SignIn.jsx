import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import validationEmail from 'utils/validationEmail';
import validationPassword from 'utils/validationPassword';
import authApi from 'api/auth';
import Input from 'components/input/Input';
import SubmitButton from 'components/button/SubmitButton';
import ErrorMessage from 'components/ErrorMessage';
import useInputValidation from 'hooks/useInputValidation';
import { putUserTokenInLocalStorage } from 'utils/localTokenUtils';

function SignIn() {
  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation(
    '',
    validationEmail,
  );

  const [password, isPasswordSuccess, handleChangePassword] =
    useInputValidation('', validationPassword);
  const [errorMessage, setErrorMessage] = useState('');
  const isSuccess = isEmailSuccess.isSuccess && isPasswordSuccess.isSuccess;
  const navigate = useNavigate();

  const pathData = {
    email: '',
    password: '',
  };

  const handleSubmit = async e => {
    e.preventDefault();
    pathData.email = email;
    pathData.password = password;

    const res = await authApi.signIn(pathData);
    if (res.status === 200) {
      putUserTokenInLocalStorage(res.data.access_token);
      navigate('/todo');
    } else {
      setErrorMessage(
        ' 이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
      );
    }
  };

  return (
    <div className=" w-full">
      <h1 className="text-3xl">Sign In</h1>
      <form className=" space-y-1" onSubmit={handleSubmit}>
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
        <ErrorMessage errorMessage={errorMessage} />
        <p>
          <Link to="/signup">회원가입하러가기</Link>
        </p>
        <SubmitButton data-testid="signin-button" isSuccess={isSuccess}>
          Sign In
        </SubmitButton>
      </form>
    </div>
  );
}

export default SignIn;
