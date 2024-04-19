/** @type {import('./$types').PageServerLoad} */
import {sb} from 'kl_sb'
export async function load() {
    const {data,error}=await sb
        .from('peos')
        .select('*')
    return {peos:data};
};