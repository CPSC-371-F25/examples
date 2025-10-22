<script>
    import { userState } from "$lib/state.svelte";

    // Get the name and count from the props passed into this component, if they exist
    // Otherwise use defaults provided below
    let {
        name = "Bridger",
        count = 0
        } = $props();

    let inputVal = $state('');

    // Derived state: no side effects, only dependent on the original var.
    let shout = $derived(inputVal.toUpperCase());

    // Event handler
    function handleClick() {
        count += 1;
        userState.someSharedValue = count;
    }

    // Conditional rendering
    let showList = $state(true);

    // Repetition
    let items = ['Svelte', 'React', 'Vue', 'Angular'];

    // Inspect gives a console log whenever the inspected var changes
    // Open the devtools console to see it
    $inspect(inputVal);

    // Simulate a slow network call that sometimes fails
    function getRandomSlow() {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.3) {
          setTimeout(() => resolve(Math.random()), 2000)
        } else {
          setTimeout(() => reject(), 2000)
        }
      });
    }
</script>

<!-- Markup follows -->

<h1>Hello, {name}!</h1>
<p>You've clicked {count} times.</p>
<button onclick={handleClick}>Click me</button>

<hr />

<!-- Two-way binding -->
<input bind:value={inputVal} placeholder="Type something..." />
<p>Length of input: {inputVal.length}</p>
<p>Shouting: {shout}</p>

<hr />

<!-- Event handling -->
<button onclick={() => showList = !showList}>
  Toggle List
</button>

<!-- Conditional rendering -->
{#if showList}
  <h2>Frameworks:</h2>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
{:else}
  <p>No frameworks to show.</p>
{/if}

<!-- Asynchronous rendering -->
{#await getRandomSlow()}
  <p>Waiting to get random number...</p>
{:then num} 
  <p>Random number is {num}</p>
{:catch err}
  <p>There was an error getting random num.</p>
{/await}


<style>
    ul {
        background-color: var(--list-bg, 'lightgray');
    }
</style>