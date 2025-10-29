<h1>Create a new trip</h1>

<form method="post">
    <label for="title">Title:
        <input type="text" name="title" id="">
    </label>
    <label for="desc">Description:
        <input type="text" name="desc" id="">
    </label>
    <label for="date">Date (YYYY-MM-DD):
        <!-- Get around Svelte {} by inserting a regular JS string for the pattern -->
        <input type="text" name="date" id="" pattern="{'\\d{4}-\\d{2}-\\d{2}'}">
    </label>
    <label for="photo">Upload photo:
        <input type="file" name="photo" id="">
    </label>

    <input type="submit" value="Submit">
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    form * {
        margin: 0.5em;
    }

    form *:invalid {
        background-color: pink;
    }
</style>