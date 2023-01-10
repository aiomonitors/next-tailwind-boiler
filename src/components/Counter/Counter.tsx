import React, {useState} from 'react';
import styled from 'styled-components';

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
		<CounterWrapper>
			<span>Current count is: {count}</span>
			<ButtonsWrapper>
				<CounterButton onClick={onIncrement}>Increment</CounterButton>
				<CounterButton onClick={onReset}>Reset</CounterButton>
			</ButtonsWrapper>
		</CounterWrapper>
	);
};

const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CounterButton = styled.button`
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
  }
`;
