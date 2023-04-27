import { inputStyle } from './globalStyle';

function PasswordInput({
  errorMessage,
  state,
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
        // state={state}
        placeholder="Password"
        onChange={onChange}
        type="password"
        id={id}
        value={value}
        className={`${inputStyle}${
          disabled ? 'bg-gray-100' : 'bg-white'
        } ${className}`}
      />
      {state ? null : <p className="text-red-500 text-sm">{errorMessage}</p>}
    </label>
  );
}

export default PasswordInput;
