/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    let txt=url.searchParams.get('a')
    
    await Deno.writeTextFile('test.txt', txt);
    return new Response('hello');
};