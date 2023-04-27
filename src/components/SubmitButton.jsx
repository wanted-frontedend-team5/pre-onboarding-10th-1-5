import globalStyle from '../utils/globalStyle';

function SubmitButton({ dataTestid, children, isSuccess = true }) {
  return (
    <button
      className={globalStyle.buttonStyle}
      type="submit"
      data-testid={dataTestid}
      disabled={isSuccess ? null : 'disabled'}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
