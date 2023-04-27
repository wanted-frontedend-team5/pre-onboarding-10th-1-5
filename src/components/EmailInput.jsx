import { inputStyle } from '../utils/globalStyle';

function EmailInput({
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
      Email
      <input
        data-testid="email-input"
        // state={state}
        placeholder="Email"
        onChange={onChange}
        type="email"
        id={id}
        value={value}
        className={`${inputStyle} ${
          disabled ? 'bg-gray-100' : 'bg-white'
        } ${className}`}
      />
      {state ? null : <p className="text-red-500 text-sm">{errorMessage}</p>}
    </label>
  );
}

export default EmailInput;
