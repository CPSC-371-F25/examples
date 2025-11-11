import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: 'http://localhost:5173' // Svelte dev server
});

// Basically
fastify.get('/api/hello', async (request, reply) => {
  return { message: 'Hello from Fastify!' };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
