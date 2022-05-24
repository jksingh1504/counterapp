import React from "react";
import "./counter.css"

const Counter = () => {
	const [count, setCount] = React.useState(0);
	const [value, setValue] = React.useState("");

	return (
		<div>
			<input
            value={value}
				type="number"
				placeholder="enter initial count"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setCount(value);
					setValue("");
				}}
			>
				Apply
			</button>
			<h1 className={count%2?"red":"green"}>Counter :{count}</h1>
            <button onClick={()=>{setCount(Number(count)+1)}}>Increment</button>
            <button onClick={()=>{if(count==0) return;setCount(Number(count)-1)}}>Decrement</button>

            <br /><br />
            <button onClick={()=>{setCount(Number(count)*2)}}>Double</button>
		</div>
	);
};

export default Counter;
