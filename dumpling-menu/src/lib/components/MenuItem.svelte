<script lang="ts">
    import menuItems from "$lib/assets/menu.json";
    import { asset } from '$app/paths';

    let props = $props();
    let id: number = props.id;
</script>

<div class="w-1/3 m-5 p-2 shadow rounded-sm hover:scale-110 duration-500">
    <img class="rounded-sm" src="{asset(menuItems[id].image_url)}" alt="">
    <p class="font-bold">{menuItems[id].name}</p>
    <p>${menuItems[id].price}</p>
</div>