import { Logger, ServerConfig } from './config';

interface App {
	listen: (port: number, ...arg: any[]) => void;
}

const listen = (app: App, serverConfig: ServerConfig, logger: Logger) => {
	app.listen(serverConfig.port, () => {
		logger.log(`listening on port ${serverConfig.port}`);
	});

	process.on('unhandledRejection', logger.error);
};

export default listen;
