import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';

import '../app/assets/styles/globals.scss';
import { API_URL } from '../app/configs/api.config';

Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window !== 'undefined') {
		ym('hit', url);
	}
});

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<title>My top - наш лучший топ</title>
				<link rel="stylesheet" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://mc.yandex.ru" />
				<meta property="og:url" content={API_URL + router.asPath} />
			</Head>
			<YMInitializer
				accounts={[]}
				options={{
					webvisor: true,
					defer: true,
				}}
				version="2"
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
