import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/auth';
import Input from '../../components/\bcommon/input/Input';
import { lengthLimit } from '../../constant/passwordRule';

function SignIn() {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validatePassword = event => {
    setPassword(event.target.value);
    if (event.target.value.length >= lengthLimit) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const validateEmail = event => {
    setEmail(event.target.value);
    if (event.target.value.includes('@')) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const register = async () => {
    try {
      const response = await authAPI.post('/auth/signin', {
        email,
        password,
      });
      const token = response.data.access_token;
      window.localStorage.setItem('token', token);
      window.location.replace('/todo');
    } catch (error) {
      navigate('/notfound');
    }
  };

  return (
    <>
      <label htmlFor="email">이메일</label>
      <Input
        id="email"
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        type="email"
        value={email}
        onChange={validateEmail}
      />
      <label htmlFor="password">비밀번호</label>
      <Input
        id="password"
        data-testid="password-input"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={password}
        onChange={validatePassword}
      />
      <button
        type="submit"
        data-testid="signin-button"
        disabled={!(validEmail && validPassword)}
        onClick={register}
      >
        로그인
      </button>
    </>
  );
}

export default SignIn;
