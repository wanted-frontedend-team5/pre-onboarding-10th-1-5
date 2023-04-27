import { useState } from 'react';

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  return [form, onChange];
}

export default useInput;
