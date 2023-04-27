import { Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorMessage from '../../components/common/ErrorMessage';

function SignIn() {
  return (
    <main className="bg-bgColor w-full h-screen py-52">
      <h1 className="invisible h-0">로그인페이지</h1>
      <article className="bg-white flex flex-col place-items-center container w-1/2 px-6 py-6 rounded-xl">
        <h2 className="text-purple font-bold pt-3 pb-5 text-4xl">Login</h2>
        <form className="flex flex-col items-center justify-center place-items-center">
          <Input
            name="email"
            label="email"
            type="email"
            placeholder="Enter Email"
            required
            data-testid="email-input"
          />
          <Input
            name="password"
            label="Password"
            type="Password"
            placeholder="Enter Password"
            required
            data-testid="password-input"
          />
          <ErrorMessage>error</ErrorMessage>
          <Button type="button" bgcolor="accentColor" txtcolor="txtwhite">
            Sign In
          </Button>
          <Link to="/signup">회원가입 하러가기 ➡</Link>
        </form>
      </article>
    </main>
  );
}

export default SignIn;
