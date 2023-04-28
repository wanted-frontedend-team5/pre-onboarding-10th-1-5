function Input({
  dataTestid,
  type,
  label,
  id,
  onChange,
  value,
  className,
  disabled,
  name = id,
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      {label}
      <input
        data-testid={dataTestid}
        placeholder={label}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        value={value}
        className={`${className}${disabled ? 'bg-gray-100' : 'bg-white'}`}
      />
    </label>
  );
}

export default Input;
