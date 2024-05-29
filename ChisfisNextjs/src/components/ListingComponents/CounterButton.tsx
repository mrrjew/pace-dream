interface CounterButtonProps {
  onClick: () => void;
  label: string;
}
const CounterButton = ({ onClick, label }: CounterButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2 px-4 border rounded-full h-12 w-12 flex items-center justify-center mx-2"
    >
      {label}
    </button>
  );
};

export default CounterButton;
