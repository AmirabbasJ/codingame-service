interface ServerConfig {
	port: number;
}

const serverConfig: ServerConfig = {
	port: Number.parseInt(process.env.PORT, 10) || 3000,
};

export { serverConfig, ServerConfig };
