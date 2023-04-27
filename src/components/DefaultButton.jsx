import globalStyle from '../utils/globalStyle';

function DefaultButton({ dataTestid, children, onClick }) {
  return (
    <button
      className={globalStyle.buttonStyle}
      onClick={onClick}
      type="button"
      data-testid={dataTestid}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
