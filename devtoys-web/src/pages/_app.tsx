import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>DevToys</title>
				<meta charSet="UTF-8" />
				<meta name="node application" content="A simple web application" />
				<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
				<meta name="description" content="Next.js Base Proj" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Jude Giordano" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#26292b" />
				<meta name="apple-mobile-web-app-status-bar" content="#26292b" />
			</Head>
			<div className="p-3 m-auto max-w-7xl font-content">
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default MyApp;
