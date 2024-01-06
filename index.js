// Import Utils that we need
const WebSocket = require('ws');
const axios = require('axios');

// Set up a WebSopcket connection (to emulate opening the SteamVR Web console)
const ws = new WebSocket(
	'ws://localhost:27062/',
	{
		followRedirects: true,
		perMessageDeflate: true,
		origin: 'http://127.0.0.1:27062'
	}
);

// Event handlers for errors and to log when the socket closed
ws.on('error', console.error);
ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('open', async () => {
	// On opening the socket, send the required message...
	ws.send('console_open');
	console.log('connected');
	
	// ...send the command to overwrite the max resolution...
	const res = await axios.get(
		'http://127.0.0.1:27062/console_command.action',
		{
			params: {
				'sCommand': 'settings steamvr.maxRecommendedResolution 8192'
			},
			headers: {
				'Referer': 'http://127.0.0.1:27062/console/index.html'
			}
		}
	);
	console.log(res.status, res.data);
	
	// ...and close the socket again
	ws.send('console_close');
	ws.close();
});
