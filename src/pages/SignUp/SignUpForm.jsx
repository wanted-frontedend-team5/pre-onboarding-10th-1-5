import { useRef } from 'react';
import { postSignUp } from '../../api/user';
import {
  emailRegexpMathcher,
  passwordRegexpMathcher,
} from '../../utils/regexpMatcher';
import { useRouterTo } from '../../hooks/useRouterTo';

function SignUpForm() {
  const submitRef = useRef(null);
  const { routerTo } = useRouterTo();

  const submitHandler = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const { status } = await postSignUp(userInfo);

    if (status === 201) {
      alert('회원가입이 성공적으로 완료되었습니다.');
      routerTo('/signin');
    }
    if (status !== 201) {
      alert('오류가 발생했습니다. 다른 이메일을 입력해 주십시요.');
    }
  };

  const onChangeFormInput = e => {
    const formData = new FormData(e.currentTarget);
    const [email, password] = [formData.get('email'), formData.get('password')];

    if (emailRegexpMathcher(email) && passwordRegexpMathcher(password)) {
      submitRef.current.disabled = false;
    } else {
      submitRef.current.disabled = true;
    }
  };

  return (
    <form onSubmit={submitHandler} onChange={onChangeFormInput}>
      <label htmlFor="email">
        이메일 :
        <input name="email" type="text" data-testid="email-input" />
        <p>이메일은 반드시 @를 포함하셔야 합니다.</p>
      </label>
      <br />
      <label htmlFor="password">
        비밀번호 :
        <input name="password" type="password" data-testid="password-input" />
        <p>비밀번호는 8자리 이상 입력해주셔야 합니다.</p>
      </label>
      <br />
      <button
        type="submit"
        data-testid="signup-button"
        ref={submitRef}
        disabled
      >
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
