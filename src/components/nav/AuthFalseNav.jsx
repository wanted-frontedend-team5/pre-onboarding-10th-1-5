import { Link } from 'react-router-dom';

function AuthFalseNav({ authFalseNavElements }) {
  return (
    <nav>
      <ul>
        {authFalseNavElements.map(element => (
          <Link id={element.id} to={element.path}>
            {element.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default AuthFalseNav;
