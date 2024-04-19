<script>
    import Counter from '../../lib/Counter.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.t);
    let url=URL.createObjectURL(data.t)
    let url_1=URL.createObjectURL(data.t_1)
    
    

   
    
</script>
<Counter></Counter>
<a href="{url}" target="_blank" download="astro.md">astro.md</a>
<a href="{url_1}" target="_blank" download="one.js">one.js</a>

