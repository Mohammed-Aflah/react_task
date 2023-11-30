import DisplayCount from "./DisplayCount";
import Buttons from "./Buttons";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
    // alert('calling')
  };
  const decrementCount=()=>{
    if(count>1){
        setCount(count-1)
    }
  }
  return (
    <>
      <h3 className=" text-center font-mono text-2xl">Counter</h3>
      <div className="w-80 h-60 bg-black mx-auto rounded-xl overflow-hidden flex flex-col justify-between">
        <DisplayCount count={count}/>
        <Buttons inc={incrementCount} dec={decrementCount}/>
        <div className=" flex justify-around mb-6">
          <button className="px-5 py-1 bg-slate-400 rounded-md text-sm " onClick={()=>setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
