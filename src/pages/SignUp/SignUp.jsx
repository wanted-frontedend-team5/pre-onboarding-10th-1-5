import { useState } from 'react';
import { authAPI } from '../../api/auth';
import Input from '../../components/\bcommon/input/Input';
import { lengthLimit } from '../../constant/passwordRule';

function SignUp() {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    await authAPI.post('/auth/signup', {
      email,
      password,
    });
    // console.log(response);
    window.location.replace('/signin');
    // .catch((err) => console.log(err));
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
        data-testid="signup-button"
        disabled={!(validEmail && validPassword)}
        onClick={register}
      >
        회원가입
      </button>
    </>
  );
}

export default SignUp;
