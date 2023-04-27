import { useState } from 'react';

const useInputValidation = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    isSuccess: false,
    errorMessage: '',
  });

  const handleChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validationFunction(inputValue, setValidation);
  };

  return [value, validation, handleChange];
};

export default useInputValidation;
