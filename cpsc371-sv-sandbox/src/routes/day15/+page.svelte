<script>
    // Import the day 15 example component
    import Day15Example from "$lib/components/Day15Example.svelte";

    import { userState } from "$lib/state.svelte";

</script>

<!-- Use the Day 15 Example component by passing in props -->
<!-- <Day15Example name="Malcolm" --list-bg="aquamarine"/> -->
<!-- No props passed in (use default values) -->
<Day15Example />

<p>{userState.someSharedValue}</p>