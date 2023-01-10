import App, {type AppProps} from 'next/app';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        min-height: 100vh;
        width: 100%;
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`;

export default function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Next.js + TypeScript + Styled Components</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}