/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    let txt=url.searchParams.get('a')
    
    
    return new Response(`hello${txt}`);
};