import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../../Api/method';

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
const PASSWORD_REGEX = /.{8,}/;

function SignIn() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    postSignIn(input);
  };

  useEffect(() => {
    if (EMAIL_REGEX.test(input.email) && PASSWORD_REGEX.test(input.password)) {
      setDisable(false);
    } else setDisable(true);
  }, [input]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token !== null) navigate('/todo');
  }, [navigate]);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email-input" aria-controls="email-input">
            email
          </label>
          <input
            type="text"
            name="email"
            id="email-input"
            data-testid="email-input"
            placeholder="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            title="@을 포함한 email을 입력해주세요."
            onChange={onChangeHandler}
            value={input.email}
          />
        </div>
        <div>
          <label htmlFor="password-input" aria-controls="password-input">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="password-input"
            placeholder="password"
            pattern=".{8,}"
            title="비밀번호는 8자 이상입니다."
            onChange={onChangeHandler}
            value={input.password}
          />
        </div>
        <button data-testid="signin-button" type="submit" disabled={disable}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignIn;
