import CounterButton from "./CounterButton";

interface RoomCounterProps {
  title: string;
  count: number;
  setCount: (count: number) => void;
}

const RoomCounter = ({ title, count, setCount }: RoomCounterProps) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex justify-between items-center">
      <p className="flex-1">{title}</p>
      <div className="flex flex-1 justify-end items-center gap-2">
        <CounterButton onClick={decrement} label="-" />
        <span>{count}</span>
        <CounterButton onClick={increment} label="+" />
      </div>
    </div>
  );
};

export default RoomCounter;
