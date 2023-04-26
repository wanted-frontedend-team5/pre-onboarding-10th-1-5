import { postSignIn } from '../../api/user';
import { putUserTokenInLocalStorage } from '../../utils/localTokenUtils';
import { useRouterTo } from '../../hooks/useRouterTo';

function SignInForm() {
  const { routerTo } = useRouterTo();

  const submitHandler = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = {
      email: formData.get('userId'),
      password: formData.get('password'),
    };

    const { status, accessToken } = await postSignIn(userInfo);

    if (status === 200) {
      putUserTokenInLocalStorage(accessToken);
      routerTo('/todo');
    }

    if (!status === 200) {
      alert(
        '잘못된 이메일과 비밀번호를 입력하셨습니다. 다시 입력하여 주십시요.',
      );
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="userId">
          이메일 :
          <input name="userId" type="text" data-testid="email-input" />
        </label>
      </p>

      <br />
      <p>
        <label htmlFor="password">
          비밀번호 :
          <input name="password" type="password" data-testid="password-input" />
        </label>
      </p>

      <br />
      <p>
        <button type="submit" data-testid="signin-button">
          로그인 하기
        </button>
      </p>
    </form>
  );
}

export default SignInForm;
