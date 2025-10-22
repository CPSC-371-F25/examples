<script>
    let someValue = $state(false);
    let colors = ['red', 'green', 'blue', '#0fddff'];
</script>


<button onclick={() => someValue = !someValue} >{someValue}</button>


<p>
Value of someValue: {someValue}
</p>

{#if someValue}

    {#each colors as color}
        <p style="color: {color}">{color}</p>
    {/each}
    
{/if}
