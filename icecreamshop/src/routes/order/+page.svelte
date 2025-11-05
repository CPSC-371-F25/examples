<script lang="ts">
    import type { PageProps } from './$types'

    let modalVisible = $state(false);

    // get data from load() function in +page.server.ts
    // get if form succeeded (returned by action: default in +page.server.ts)
    let { data, form }: PageProps = $props();

    // Only show modal when form exists
    if (form) modalVisible = true;
</script>

<main>
<h1>Place your order:</h1>

<!-- from the Svelte docs: https://svelte.dev/docs/kit/form-actions -->
<!-- this message is ephemeral; it exists because the page was rendered in
        response to a form submission. it will vanish if the user reloads -->
{#if modalVisible}
<div class="modal">
  {#if form?.success}
    <p>Thanks {form.orderName}! Your order number is {form.orderId}.</p>
  {:else}
    <p>Sorry, we couldn't process your request. Try again later.</p>
  {/if}

  <button onclick={() => modalVisible = false}>OK</button>
</div>
{/if}


<form method="POST">
    <!-- TODO: use data to dynamically add options to select (add correct ID as well) -->
  <label>Choose a flavor:
    <select id="flavor" name="flavor" required>
      <option value="">--Select Flavor--</option>
      {#each data.flavors as f}
        <option value={f.id} >${f.price.toFixed(2)} {f.name}</option>
      {/each}
    </select>
  </label>

    <!-- TODO: use data to dynamically add options to select -->
  <label for="base">Choose a base:
    <select id="base" name="base" required>
      <option value="">--Select Base--</option>
      {#each data.bases as b}
        <option value={b.id}>{b.name}</option>
      {/each}
    </select>
  </label>

  <label>Number of scoops
    <input type="number" name="scoops" value="1">
  </label>

  <label>Enter your name:
    <input type="text" name="customerName">
  </label>

  <button type="submit">Place Order</button>
</form>
</main>

<style>
  main {
    width: 20rem;
    margin: auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form>* {
    margin: 0.5em 0;
  }

  .modal {
    --modal-width: 10rem;
    --modal-height: 10rem;
    position: fixed;
    left: calc(50% - var(--modal-width));
    height: var(--modal-height);
    background-color: white;
    border: 1px solid black;
  }
</style>