export default function Button({ children, bgcolor, txtcolor, disalbed }) {
  const colorVariants = {
    accentColor: 'bg-accentColor',
    txtwhite: 'text-white',
  };

  return (
    <button
      className={`${colorVariants[bgcolor]} ${colorVariants[txtcolor]} py-2 px-4 my-4 rounded-lg hover:scale-105 disabled:scale-100 disabled:text-white disabled:bg-grey`}
      type="submit"
      disabled={disalbed}
    >
      {children}
    </button>
  );
}
