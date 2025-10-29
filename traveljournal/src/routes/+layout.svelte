<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- TODO paste nav component -->
<NavBar />

{@render children?.()}


<footer>
	&copy; 2025 CPSC 371 Class
</footer>


<style>
	:global(body) {
		margin: 0;
	}

	footer {
		background-color: #bbb;
	}
</style>