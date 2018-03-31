export const createRoutes = () => {
	return [
		{
			method: 'POST',
			path: '/api/appName/appLocation',
			config: {
				payload: { allow: 'application/json' }
			},
			handler: (req, h) => {
				console.log('req', req.payload.appName)
				const { appName, appLocation } = req.payload
				console.log(appName)
				console.log(appLocation)
				return 'hello world'
			}
		}
	]
}
