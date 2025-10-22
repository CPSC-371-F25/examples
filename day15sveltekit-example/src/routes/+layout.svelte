<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<nav>
	<ul>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</ul>
	<p>This nav bar (and paragraph) will be used for every child and sibling page!</p>
</nav>

{@render children?.()}


<style>
	nav {
		margin: 1rem;
	}
	nav p {
		color: gray;
		font-size: smaller;
		font-style: italic;
	}
	ul a {
		padding: 0.5rem;
		margin: 0.5rem;
		border: 1px solid gray;
		border-radius: 5px;
	}
</style>