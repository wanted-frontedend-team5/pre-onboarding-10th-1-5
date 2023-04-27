import { Link } from 'react-router-dom';
import { removeUserTokenInLocalStorage } from '../../utils/localTokenUtils';
import { useRouterTo } from '../../hooks/useRouterTo';

function AuthTrueNav({ authTrueNavElements }) {
  const { routerTo } = useRouterTo();

  const logoutHandler = () => {
    removeUserTokenInLocalStorage();
    routerTo('/');
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
          <Link id={element.id} to={element.path}>
            {element.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default AuthTrueNav;
