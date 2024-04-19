<script>
    /** @type {import('./$types').PageData} */
    // export let data;
    let aa=''
    let bb=''
    $:msg=`{"${aa}":"${bb}"}`
</script>
<a href="hello.txt" download="hello.txt">hello</a>
<a
  href="data:,{msg}"
  download="hello.json"
>点击</a>
<input type="text" bind:value={aa}>
<input type="text" bind:value={bb}>
<p>{msg}</p>
