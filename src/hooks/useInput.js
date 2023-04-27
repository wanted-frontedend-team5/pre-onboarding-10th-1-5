import { useState, useCallback } from 'react';

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const setValue = useCallback((name, value) => {
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  return [form, onChange, setValue];
}

export default useInput;
