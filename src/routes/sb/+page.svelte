<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
{#each data.sb_peos as x}
   <p>{x.name}-{x.age}-{x.sex}</p> 
{/each}