import React from 'react';
import { GiConfirmed } from 'react-icons/gi';

export default function SubmitButton() {
  return (
    <button data-testid="submit-button" type="submit">
      <GiConfirmed />
    </button>
  );
}
