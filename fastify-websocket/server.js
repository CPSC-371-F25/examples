const fastify = require('fastify')({ logger: true });
const path = require('node:path')


// set up static file server to serve from 'public'
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
});

// set up websocket server
fastify.register(require('@fastify/websocket'));
fastify.register(async (fastify) => {
    // Define a route for websocket to communicate on
    fastify.get('/connect', { websocket: true }, (socket, request) => {
        console.log('new WebSocket client connected!');
        socket.send('Connected to Fastify WebSocket server');
        socket.on('message', (message) => {
            const text = message.toString();
            console.log('new message from client: ' + text);
            socket.send(`Your message was: ${text}`);
        });
    });
});


async function start() {
    fastify.listen({ port: 3000 }, err => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    })
}

start();