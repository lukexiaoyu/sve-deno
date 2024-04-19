<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#each data.results as x}
    <p>{x.name}-{x.age}-{x.name}</p>
{/each}