export default function Button({ children, bgcolor, txtcolor }) {
  const colorVariants = {
    accentColor: 'bg-accentColor',
    txtwhite: 'text-white',
  };

  return (
    <button
      className={`${colorVariants[bgcolor]} ${colorVariants[txtcolor]} py-2 px-4 my-4 rounded-lg hover:scale-105`}
      type="submit"
    >
      {children}
    </button>
  );
}
