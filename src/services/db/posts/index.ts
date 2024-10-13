import { Post } from "@/types/post";
import { createClientBrowser } from "../server";

async function getPosts() {

    const supabase = createClientBrowser();

    const { data, error } = await supabase.from('post').select('*');
    if (error) {
        console.error(error);
    } else {
        return data
    }
}

async function getPostById(id: number) {
    const supabase = createClientBrowser();
    const { data, error } = await supabase.from('post').select('*').eq('id', id).single();
    if (error) {

    } else {
        console.log(data);
        return data
    }
}

export {
    getPosts,
    getPostById
};
