import { BsPencilFill } from 'react-icons/bs';

export default function ModifyButton({ onclick }) {
  return (
    <button onClick={onclick} data-testid="modify-button" type="button">
      <BsPencilFill />
    </button>
  );
}
