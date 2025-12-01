<script>
    import menuItems from "$lib/assets/menu.json";
    import MenuItem from "$lib/components/MenuItem.svelte";

</script>


<main class="flex flex-wrap justify-center">
{#each menuItems as item, index}
    <MenuItem id={index} />
{/each}
</main>


<!-- Menu items and photos from https://www.dumplingtime.com -->