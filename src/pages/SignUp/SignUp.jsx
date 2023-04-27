import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorMessage from '../../components/common/ErrorMessage';
import useInput from '../../hooks/common/useInput';
import authApi from '../../api/auth';

function SignUp() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [{ email, password }, onChange] = useInput({
    email: '',
    password: '',
  });

  const MIN_PASSWORD_LENGTH = '8';
  const checkValid = !(
    email.includes('@') && password.length >= parseInt(MIN_PASSWORD_LENGTH, 10)
  );

  const signupData = {
    email,
    password,
  };

  const signup = async () => {
    const res = await authApi.signUp(signupData);
    if (res?.status === 400) {
      return setError(res.data.message);
    }
    if (res?.status === 201) {
      return navigate('/signin');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkValid) {
      signup();
    } else {
      setError('비밀번호를 8자 이상 입력하세요');
    }
  };

  return (
    <main className="bg-bgColor w-full h-screen py-52">
      <h1 className="invisible h-0">회원가입페이지</h1>
      <article className="bg-white flex flex-col place-items-center container w-1/2 px-6 py-6 rounded-xl">
        <h2 className="text-purple font-bold pt-3 pb-5 text-4xl">Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center place-items-center"
        >
          <Input
            onChange={onChange}
            value={email}
            name="email"
            label="email"
            type="email"
            placeholder="Enter Email"
            required
            dataTestid="email-input"
          />
          <Input
            onChange={onChange}
            value={password}
            name="password"
            label="Password"
            type="Password"
            placeholder="Enter Password"
            required
            dataTestid="password-input"
          />
          <ErrorMessage>{error}</ErrorMessage>
          <Button
            bgcolor="accentColor"
            txtcolor="txtwhite"
            disalbed={checkValid}
          >
            Sign Up
          </Button>
        </form>
      </article>
    </main>
  );
}

export default SignUp;
