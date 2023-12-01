import { useEffect, useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
function Fetching() {
  const [data, setData] = useState({});
  const [count,setCount]=useState(0)
  const countIncrement=()=>{
    setCount((prev)=>prev+1)
  }
  const countDecrement=()=>{
    if(count>1){
        setCount((prev)=>prev-1)
    }
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setData(response.data)
      });
  }, []);
  return (
    <div className="main flex flex-col justify-between">
      <div className="num_display flex items-center justify-center font-mono">
        <h2>{count}</h2>
      </div>
      <div className="card h-36 w-[100%] bg-slate-50 flex items-center flex-col justify-center">
        <div>
          <h2 id="hel">{data.name}</h2>
        </div>
        <div>{data.email}</div>
      </div>
      <div className="card h-36 w-[100%] text-gray-700 flex items-center justify-around">
        <button className="btns" onClick={countIncrement}>
          <FaPlus/>
        </button>
        <button className="btns" onClick={countDecrement}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
export default Fetching;
