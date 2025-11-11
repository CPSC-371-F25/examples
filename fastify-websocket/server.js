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
        console.log('New WebSocket client connected!');
        let initMsg = {
            type: 'message',
            name: 'Server',
            data: 'Connected to Fastify WebSocket server',
        };
        socket.send(JSON.stringify(initMsg));

        // Handle incoming messages from server
        // yeah this would be tons better with typescript but in the
        // interest of simplicity here we are..
        // Message schema:
        // {
        //      "type": "message" | "coord",
        //      "name": "your name",
        //      "data": "some message" | [x, y] coord
        // }
        socket.on('message', (message) => {
            let msgObj = JSON.parse(message.toString());
            let msgType = msgObj.type;
            if (msgType == 'message') {
                console.log(`${msgObj.name} says: "${msgObj.data}"`);
                let outMsg = {
                    type: 'message',
                    name: 'Server',
                    data: `Hello ${msgObj.name}`,
                };
                socket.send(JSON.stringify(outMsg));
            } else if (msgType == 'coord') {
                // TODO
            }
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