import Input from "@/shared/Input";
import CounterButton from "./CounterButton";
import FormItem from "@/app/add-listing/FormItem";
import { PlusIcon } from "@heroicons/react/24/solid";
// import FormItem from "../FormItem";

interface RoomCounterProps {
  title: string;
  count: number;
  setCount: (count: number) => void;
}

const RoomCounter = ({ title, count, setCount }: RoomCounterProps) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex flex-col gap-4">
      <p className="flex-1 py-2">{title}</p>
      <div
        className="flex flex-1 justify-end items-center gap-2 
       ring-1 ring-gray-300 rounded-lg px-2
      "
      >
        {/* <span>{count}</span> */}
        {/* <CounterButton onClick={increment} label="+" /> */}
        <Input
          defaultValue={count}
          onChange={(e) => setCount(parseInt(e?.currentTarget?.value) || 0)}
          value={count}
          name="counter"
          type="text"
          placeholder={`0 ${title}`}
          className="border-none focus:ring-0"
        />
        <button
          onClick={increment}
          className="bg-transparent hover:bg-gray-300 text-gray-600 p-2 rounded-full"
        >
          <PlusIcon className="w-5 h-5 text-inherit font-bold" />
        </button>
      </div>
    </div>
  );
};

export default RoomCounter;
