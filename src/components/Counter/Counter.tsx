import React, {useState} from 'react';
export type CounterProps = {
	initialValue?: number;
};

export const Counter = ({initialValue = 0}: CounterProps) => {
	const [count, setCount] = useState(initialValue);

	const onIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const onReset = () => {
		setCount(initialValue);
	};

	return (
		<div className='flex flex-col items-center'>
			<span className='text-xl font-medium mt-2'>Current count is: {count}</span>
			<div className='flex flex-initial w-64 justify-between items-stretch mt-2'>
				<button className='bg-indigo-300 px-2.5 py-2 rounded-md text-slate-800 font-medium hover:cursor-pointer hover:bg-indigo-400 hover:scale-105 ease-in-out duration-200'
					onClick={onIncrement}>Increment</button>
				<button className='bg-rose-300 px-2.5 py-2 rounded-md text-slate-800 font-medium hover:cursor-pointer hover:bg-rose-400 hover:scale-105 ease-in-out duration-200'
					onClick={onReset}>Reset</button>
			</div>
		</div>
	);
};