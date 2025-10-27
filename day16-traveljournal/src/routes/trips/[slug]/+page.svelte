<script lang="ts">
    import travels from "$lib/assets/travels.json";
    import { asset } from '$app/paths';
    import type { PageProps } from "./$types";

    // Import data from +page.ts, which parses the URL including the [slug] part and gives
    let { data }: PageProps = $props();
</script>

<main>
    <h1> {travels[data.tripID].title} </h1>

    <p> {travels[data.tripID].startDate} </p>

    <img src={asset(travels[data.tripID].photoUrl)} alt="">

    <p> {travels[data.tripID].description} </p>

</main>

<style>
    img {
        width: 80%;
    }

    main {
        width: 80vw;
        margin: auto;
    }
</style>