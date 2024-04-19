/** @type {import('./$types').PageServerLoad} */
import {sb} from 'npm:kl_sb'
export async function load() {
    const {data,error}=await sb
        .from('peos')
        .select('*')
    return {sb_peos:data};
};