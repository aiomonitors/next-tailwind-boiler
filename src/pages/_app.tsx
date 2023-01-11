import App, {type AppProps} from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Next.js + TypeScript + Styled Components</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}