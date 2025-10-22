<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<h1>{data.page.title}</h1>

<p>The slug is: {data.page.slug}</p>

