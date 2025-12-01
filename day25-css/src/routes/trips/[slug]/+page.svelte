<script lang="ts">
    import { travels } from "$lib/assets/travels";
    // Let typescript know it's ok to access keys by string
    type TravelKey = keyof typeof travels;
    import { asset } from '$app/paths';
    import type { PageProps } from "./$types";

    // Import data from +page.ts, which parses the URL including the [slug] part and gives
    let { data }: PageProps = $props();

    // Let typescript know it's ok to access keys by string
    let tripID = data.tripID as TravelKey;
</script>

<main>
    <h1> {travels[tripID].title} </h1>

    <p> {travels[tripID].startDate} </p>

    <img src={asset(travels[tripID].photoUrl)} alt="">

    <p> {travels[tripID].description} </p>

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