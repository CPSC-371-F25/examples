// Node.js has been slow to the uptake of ES6 modules, so `require()` is still
// more common (and some fastify plugins require it, which is why we're using it
// here).
const fastify = require('fastify')({ logger: false });
const path = require('node:path')
const fs = require('node:fs');


// register form handling plugin (handle application/x-www-form-urlencoded)
fastify.register(require('@fastify/formbody'))

// register fastify static files plugin
// static files are served from 'public' folder
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
});


// In-memory storage for submissions
// Pre-poplulated with a couple submissions
const submissions = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "message": "I'm interested in learning more about your services.",
        "timestamp": "2025-11-10T16:18:00.000Z"
    },
    {
        "id": 2,
        "name": "Brandon Lee",
        "email": "brandon.lee@example.org",
        "message": "Can you help me with a custom web development project?",
        "timestamp": "2025-11-10T16:20:00.000Z"
    }
];



// GET /submissions/:id
// A lot more concise than SvelteKit's way of handling parametric routes!
// TODO
fastify.get('/submissions/:id', async (request, reply) => {
    const { id } = request.params;
    console.log(id);

    // These would work, but find is shorter.
    // let submission = {};
    // for (const sub of submissions) {
    //     if (sub.id == id) {
    //         submission = sub;
    //         break;
    //     }
    // }

    // submissions.forEach((v) => {
    //     if (sub.id == id) {
    //         submission = sub;
    //         return;
    //     }
    // });

    // submissions.filter((s) => s.id == id);
    let submission = submissions.find((s) => s.id == id);

    if (submission) {
        reply.send(submission);
    } else {
        reply.code(404)
            .send(`Submission ${id} not found`);
    }
});

// GET /submissions - return all contact form submissions
// TODO
fastify.get('/submissions', async (request, reply) => {
    reply.send(submissions);
});

// POST /submit - receive contact form data
// TODO
fastify.post('/submit', async (request, reply) => {
    const { name, email, message } = request.body;

    const id = submissions.length + 1;
    const timestamp = new Date();

    const sub = {
        name, email, message, id, timestamp
    };

    submissions.push(sub);

    reply.send({
        success: true,
        submission: sub,
    });
});




// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server running at http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();