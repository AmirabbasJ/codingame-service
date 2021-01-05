interface ServerConfig {
	port: number;
}

const serverConfig: ServerConfig = {
	port: Number.parseInt(process.env.PORT || '3000', 10),
};

export { serverConfig, ServerConfig };
