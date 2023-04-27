import { Link } from 'react-router-dom';
import { removeUserTokenInLocalStorage } from '../../utils/localTokenUtils';

function AuthTrueNav({ authTrueNavElements }) {
  const logoutHandler = () => {
    removeUserTokenInLocalStorage();
  };

  return (
    <nav>
      <ul>
        <button type="button" onClick={logoutHandler}>
          로그아웃 하기
        </button>
      </ul>
      <ul>
        {authTrueNavElements.map(element => (
          <Link to={element.path}>{element.name}</Link>
        ))}
      </ul>
    </nav>
  );
}

export default AuthTrueNav;
