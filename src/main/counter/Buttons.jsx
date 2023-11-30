import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
function Buttons(prop) {
  const handleIncrement = () => {
    prop.inc();
  };
  const handleDecrement=()=>{
    prop.dec()
  }
  return (
    <div className="flex justify-around">
      <button
        className="text-sm border-2 p-2 rounded-full text-white"
        onClick={handleIncrement}
      >
        <FaCirclePlus />
      </button>
      <button className="text-sm border-2 p-2 rounded-full text-white" onClick={handleDecrement}>
        <FaCircleMinus />
      </button>
    </div>
  );
}
export default Buttons;
