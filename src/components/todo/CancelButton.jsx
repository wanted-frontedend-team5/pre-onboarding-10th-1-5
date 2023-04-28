import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

export default function CancelButton({ onclick }) {
  return (
    <button onClick={onclick} data-testid="cancel-button" type="button">
      <ImCancelCircle />
    </button>
  );
}
