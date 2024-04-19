/** @type {import('./$types').PageServerLoad} */
const hr={
    'X-LC-Id': 'MKfnJcxoVk4CghtfCDbXGgZO-gzGzoHsz',
    'X-LC-Key': '07oxe84o11rhZUTez5FB9MYU',
    'Content-Type': 'application/json'
}
export async function load({fetch}) {
    const res=await fetch('https://api.leancloud.cn/1.1/classes/Peo',{headers:hr});
    const peos=await res.json();
    return peos
    
};