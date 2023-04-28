import globalStyle from '../../utils/globalStyle';

function DefaultButton({ children, onClick, dataTestid = '' }) {
  return (
    <button
      className={globalStyle.smButtonStyle}
      onClick={onClick}
      type="button"
      data-testid={dataTestid}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
