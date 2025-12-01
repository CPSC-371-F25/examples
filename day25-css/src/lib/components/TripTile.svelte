<script lang="ts">
    import travels from "$lib/assets/travels.json";
    import { asset } from '$app/paths';
    import { fade } from "svelte/transition";

    let props = $props();
    let tripID: string = props.tripID;

    let isHovering = $state(false);
</script>

<!-- Link to each individual trip -->
<a href="/trips/{tripID}">
<!-- Screen reader users will just navigate to the link, not bother with hovering. -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="tile"
    onmouseenter={() => isHovering = true}
    onmouseleave={() => isHovering = false}>
    <img src={asset(travels[tripID].photoUrl)} alt="">

    {#if isHovering}
        <p transition:fade>{travels[tripID].title}</p>
    {/if}
</div>
</a>


<style>
    p {
        text-align: center;
        margin: 0;
    }
    img {
        width: calc(100% - 2rem);
        max-height: calc(80% - 2rem);
        padding: 1rem;
        object-fit: cover;
    }
    .tile {
        margin: 2rem;
        background-color: var(--background-color);
        border-radius: var(--border-radius);
        width: 20rem;
        height: 20rem;
    }
</style>