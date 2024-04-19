/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const res=await fetch('https://unpkg.com/kldeno/astro.md')
    const res_1=await fetch('https://unpkg.com/kldeno/one.js')
    const tem_1=await res_1.blob()
    const tem=await res.blob()
    return {t:tem,t_1:tem_1};
};