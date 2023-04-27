function Input({ id, placeholder, type, value, onChange }) {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
