import { createClientBrowser } from "../server";
import { NextResponse } from "next/server";
import { PostDTO } from "@/types/Post/dto/postDTO";

const supabase = createClientBrowser();

async function getPosts() {

    const { data, error } = await supabase.from('post').select('*');
    if (error) {
        console.error(error);
    } else {
        return data
    }
}

async function getPostById(id: number) {

    const { data, error } = await supabase.from('post').select('*').eq('id', id).single();
    if (error) {
        console.error(error);
    } else {
        console.log(data);
        return data
    }
}

async function insertPost({ title, description, content, slug, authorId = "1" }: PostDTO) {
    const { data, error } = await supabase.from('post').insert({ title, description, content, slug, authorId });
    if (data) return NextResponse.json(data);
    if (error) return NextResponse.json(error);

    return data
}

export {
    getPosts,
    getPostById,
    insertPost
};
