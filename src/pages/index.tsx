import React, {useState} from 'react';
import styled from 
	'styled-components';
import {Counter} from '../components/Counter/Counter';

const IndexPage = () => {
	const [counter, setCount] = useState(0);

	return (
		<IndexPageWrapper>
			<span>Hello World!</span>
			<Counter initialValue={0} />
		</IndexPageWrapper>
	);
};

const IndexPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


export default IndexPage;
