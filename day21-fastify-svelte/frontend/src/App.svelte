<main>
  <!-- Because of the proxy in vite.config.ts, any route beginning with /api is
  automatically served from Fastify. -->
  {#await fetch('/api/hello').then((r) => r.json())}
     <p>Waiting for message...</p>
  {:then messageData} 
    <p>Message is {messageData.message}</p>
  {:catch e}
    <p>Error fetching message: {e}</p>
  {/await}
</main>
