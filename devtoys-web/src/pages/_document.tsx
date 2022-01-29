import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
// import { SWRConfig } from "swr";
// import { remote } from 'electron'
// import { Notifications } from "@Components/Notifications";
// import { AppLink } from "@Elements";

// const currentWindow = remote.getCurrentWindow();

const Document: React.FC = (): JSX.Element => {
	return (
		<Html>
			<Head />
			{/* <SWRConfig value={{ provider: () => new Map() }}> */}
			{/* <body style={{"width: 500px; height: 500px; border-radius: 5px"}}> */}
			<body id="electron-titlebar">
				<Main />
				<NextScript />
			</body>
			{/* </SWRConfig>
			<Notifications /> */}
		</Html>
	);
};

export default Document;
