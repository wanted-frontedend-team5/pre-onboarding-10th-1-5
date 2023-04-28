import globalStyle from '../../utils/globalStyle';

function Input({
  dataTestid,
  type,
  label,
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
        placeholder={label}
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        className={`${globalStyle.inputStyle}${
          disabled ? 'bg-gray-100' : 'bg-white'
        } ${className}`}
      />
    </label>
  );
}

export default Input;
