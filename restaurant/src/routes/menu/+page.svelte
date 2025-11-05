<script lang="ts">
    import type { PageData } from './$types'

    // get data from +page.server.ts
    export let data: PageData
</script>



<h1>Flavors</h1>

<ul>
    <!-- Show each flavor from the database -->
    {#each data.flavors as f}
        <li>{f.name} (${f.price})</li>
    {/each}
</ul>