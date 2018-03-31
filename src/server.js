import Hapi from 'hapi'
import { createAppLocationRoutes } from './routes'

const server = new Hapi.Server({
	host: 'localhost',
	port: 9000
})

const addRoute = route => server.route(route)

export async function start() {

	try {
		createAppLocationRoutes().forEach(addRoute)
		await server.start()
	}
		catch (err) {
		console.log(err);
		process.exit(1);
	}
	console.log('Server running at:', server.info.uri);
}
