import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorMessage from '../../components/common/ErrorMessage';
import useInput from '../../hooks/common/useInput';
import authApi from '../../api/auth';

function SignIn() {
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

  const loginData = {
    email,
    password,
  };

  const login = async () => {
    const res = await authApi.signIn(loginData);
    const token = res.data.access_token;
    if (res?.status === 401) {
      return setError(res.data.message);
    }
    if (res?.status === 404) {
      return setError(res.data.message);
    }
    if (res?.status === 200 && token) {
      localStorage.setItem('access_token', JSON.stringify(token));

      return navigate('/todo');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkValid) {
      login();
    } else {
      setError('비밀번호를 8자 이상 입력하세요');
    }
  };

  return (
    <main className="bg-bgColor w-full h-screen py-52">
      <h1 className="invisible h-0">로그인페이지</h1>
      <article className="bg-white flex flex-col place-items-center container w-1/2 px-6 py-6 rounded-xl">
        <h2 className="text-purple font-bold pt-3 pb-5 text-4xl">Login</h2>
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
            Sign In
          </Button>
          <Link to="/signup">회원가입 하러가기 ➡</Link>
        </form>
      </article>
    </main>
  );
}

export default SignIn;
