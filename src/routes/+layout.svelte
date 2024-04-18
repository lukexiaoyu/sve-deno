<script>
    const adds=[
        {name:'home',link:'/'},
        {name:'two',link:'/two'},
        
    ]
</script>
<div>
    {#each adds as x}
        <a href="{x.link}">{x.name}</a>
    {/each}
    <hr>
    <slot></slot>
</div>
<style>
    a{
        margin: 0 5px;
    }
</style>


