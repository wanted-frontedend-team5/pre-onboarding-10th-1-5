function SubmitButton({ dataTestid, children, isSuccess = true, className }) {
  return (
    <button
      className={className}
      type="submit"
      data-testid={dataTestid}
      disabled={isSuccess ? null : 'disabled'}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
