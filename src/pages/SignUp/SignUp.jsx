import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../Api/method';

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
const PASSWORD_REGEX = /.{8,}/;

function SignUp() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    postSignUp(input);
    navigate('/signin');
  };

  useEffect(() => {
    if (EMAIL_REGEX.test(input.email) && PASSWORD_REGEX.test(input.password)) {
      setDisable(false);
    } else setDisable(true);
  }, [input]);

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
            required
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
            required
            onChange={onChangeHandler}
            value={input.password}
          />
        </div>
        <button
          data-testid="signup-button"
          type="submit"
          disabled={disable}
          color="accentColor"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
