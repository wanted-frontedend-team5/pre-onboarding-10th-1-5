import globalStyle from '../utils/globalStyle';

function Button({ dataTestid, onClick, isSuccess, children }) {
  return (
    <button
      className={globalStyle.buttonStyle}
      onClick={onClick}
      type="submit"
      data-testid={dataTestid}
      disabled={isSuccess ? null : 'disabled'}
    >
      {children}
    </button>
  );
}

export default Button;
