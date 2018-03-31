export const createRoutes = () => {
	return [{
		method: 'POST',
		path: '/api/{appName}/{appLocation}',
		config: {
			payload: { allow: 'application/json' }
		},
		handler: (req, h) => {
			console.log('req', req)
			return 'hello world'
		}
	}]
}
