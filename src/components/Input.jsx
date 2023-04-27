import globalStyle from '../utils/globalStyle';

function Input({
  dataTestid,
  type,
  label,
  errorMessage,
  id,
  onChange,
  value,
  className,
  disabled,
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      {label}
      <input
        data-testid={dataTestid}
        placeholder="Password"
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        className={`${globalStyle.inputStyle}${
          disabled ? 'bg-gray-100' : 'bg-white'
        } ${className}`}
      />
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </label>
  );
}

export default Input;
