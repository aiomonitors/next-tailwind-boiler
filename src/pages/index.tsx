import React, {useState} from 'react';
import {Counter} from '../components/Counter/Counter';

const IndexPage = () => {
	const [counter, setCount] = useState(0);

	return (
		<div className='flex flex-col items-center justify-center w-full bg-slate-200 min-h-screen text-base'>
			<span className='text-3xl font-semibold'>Hello World!</span>
			<Counter initialValue={0} />
		</div>
	);
};

export default IndexPage;
