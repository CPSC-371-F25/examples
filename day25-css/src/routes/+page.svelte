<script lang="ts">
    import travels from "$lib/assets/travels.json";
    

    import TripTile from "$lib/components/TripTile.svelte";
    import { styleConsts } from "$lib/consts";
</script>


<h1>All the travels!</h1>


<main class="container">

{#each Object.keys(travels) as tripID}
    <TripTile tripID={tripID} --border-radius={styleConsts.borderRadius} --background-color={styleConsts.primaryColor} />
{/each}

</main>

<!-- Simplest way to dynamically load image from `static` folder.
 Can also use dynamic import: https://stackoverflow.com/a/77934957, which enables the images to be pre-optimized -->
<!-- <img src={asset(travels['toronto'].photoUrl)} alt=""> -->

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        margin: auto;
    }
</style>