<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
{#each data.peos as x}
    {x.name}
{/each}