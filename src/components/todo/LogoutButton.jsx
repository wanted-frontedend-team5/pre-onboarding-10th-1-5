import { FiLogOut } from 'react-icons/fi';

export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/signin';
  };

  return (
    <button onClick={handleLogout} type="button">
      <FiLogOut />
    </button>
  );
}
