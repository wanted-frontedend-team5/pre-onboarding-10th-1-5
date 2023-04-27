import { UIStyle } from './globalStyle';

function PasswordInput({
  errorMessage,
  id,
  onChange,
  value,
  className,
  disabled,
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      Password
      <input
        data-testid="password-input"
        placeholder="Password"
        onChange={onChange}
        type="password"
        id={id}
        value={value}
        className={`${UIStyle.inputStyle}${
          disabled ? 'bg-gray-100' : 'bg-white'
        } ${className}`}
      />
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </label>
  );
}

export default PasswordInput;
