# Fastify + Svelte App

Svelte frontend app running on top of a Fastify backend (instead of SvelteKit).

Svelte code is in the `frontend` folder

Fastify code is in the `backend` folder

## Installation

To run the code, go into each individual folder and do `npm install`.

Then do the following (in this folder) to run both dev servers (see root
`package.json` for info about how this works):

```
npm run dev
```

To test each server individually:

```
# for the frontend
cd frontend
npm run start

# for the backend
cd backend
npm run dev
```

> [!NOTE]
> Any changes to `server.js` will still require restarting the server.
> Hot-reload is only supported on the Svelte/Vite side.


For production, would need an alternative approach where we do `vite build` on
the frontend, then use Fastify to serve the pre-built files with the `@fastify/static` plugin.





## Set up a new project from scratch

To set the project up, I did the following:

for the frontend, then select "Svelte" template

```
npm init vite
```

then, add a proxy to vite.config.ts so that any requests to /api are served from Fastify:

```ts
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Send all /api requests to Fastify
    }
  }
})
```


for the backend. CORS is to support cross-origin requests to Svelte Vite server.

```
npm install fastify @fastify/cors
```


for the project root (to run both servers)
```
npm install --save-dev concurrently
```