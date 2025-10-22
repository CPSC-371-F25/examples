<script lang="ts">
    let url: string = $state('');

    function gotoUrl() {
        window.location.href = '/custom/' + url;
    }

    function handleKeydown(evt: KeyboardEvent) {
        if (evt.key == 'Enter') {
            gotoUrl();
        }
    }
</script>

<h1>This is the root URL</h1>
<p>Kinda like index.html with basic HTML.</p>

<p>
    Here are some links (also replicated in the navigation from the shared layout):
</p>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>

<h2>Go to a custom URL on this site:</h2>

<input type="text" id="url" placeholder="example-url" bind:value={url} onkeypress={handleKeydown}>

<button onclick={gotoUrl}>Go!</button>