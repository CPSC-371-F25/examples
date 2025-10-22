<script>
    let { initCount = 0 } = $props();
    // $state() is a rune, makes counter var reactive.
    let counter = $state(initCount);
</script>



<main>
    <input type="number" id="number-input" bind:value={counter}>

    <!-- Use interpolation (templating) to insert value of counter here -->
    <p>Your counter is: {counter}</p>
</main>


<style>
    /* would put CSS here if we had some */
</style>