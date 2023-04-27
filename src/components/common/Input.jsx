import React from 'react';

export default function Input({
  onChange,
  name,
  label,
  type,
  placeholder,
  required,
  value,
}) {
  return (
    <>
      <label htmlFor={type} className="pt-2">
        {label}
      </label>
      <input
        className="mb-5 pl-2 text-lg autofill:bg-yellow-200 "
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </>
  );
}
