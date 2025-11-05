<script lang="ts">
    import type { PageData } from './$types'

    // get data from +page.server.ts
    let { data }: { data: PageData } = $props();
</script>


<h1>Menu</h1>

<h2>Flavors</h2>

<ul>
    <!-- Show each flavor from the database -->
    {#each data.flavors as f}
        <li>{f.name} (${f.price})</li>
    {/each}
</ul>


<!-- TODO: add available bases -->

<h2>Bases</h2>
<ul>
    <!-- Show each flavor from the database -->
    {#each data.bases as f}
        <li>{f.name}</li>
    {/each}
</ul>