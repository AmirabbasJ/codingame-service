import app from './app';
import { serverConfig } from './config';

app.listen(serverConfig.port, () => {
	console.log(`listening on port ${serverConfig.port}`);
});

process.on('unhandledRejection', console.error);
