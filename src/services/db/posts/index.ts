import { PostDTO } from "@/types/Post/dto/postDTO";
import { NextResponse } from "next/server";
import { createClientBrowser } from "../server";


const supabase = createClientBrowser();

async function getPosts() {

    const { data, error } = await supabase.from('Post').select('*');
    console.log('data', data, 'error', error)
    if (error) {
        console.error(error);
    } else {
        return data
    }
}

async function getPostById(id: number) {
    console.log(id)
    try {
        const { data, error } = await supabase.from('Post').select('*').eq('id', id).maybeSingle();
        console.log(data, error)
        return {
            data,
            error
        }
    } catch (error) {
        console.error(error);
    }
}

async function insertPost({ id, title, description, content, slug, image_featured }: PostDTO): Promise<any> {
    if (id === undefined) {
        id = Math.floor(Math.random() * 1000);
    }
    const data = await getPostById(id);
    console.log(data?.data)

    if (data?.data === null) {
        console.log("entroy aqui")
        try {
            const { data, error } = await supabase.from('Post').insert({ title, description, content, slug, image_featured, id });
            console.log(data, error)
            return {
                data,
                error
            }
        } catch (error) {
            return error
        }
    }


}

async function updatePost({ id, title, description, content, slug, image_featured }: PostDTO): Promise<any> {
    console.log(id, title, description, content, slug, image_featured)
    try {
        const { data, error } = await supabase.from('Post').update({ title, description, content, slug }).eq('id', id);
        if (data) {
            return NextResponse.json(data);
        } else {
            throw new Error('Failed to update post')
        }
    } catch (error) {
        return error;
    }
}

async function getPublicUrl(fileName: string, bucket: string) {
    const { data } = await supabase.storage.from(bucket).getPublicUrl(fileName);
    if (!data) return undefined;
    return data.publicUrl
}

async function uploadImageFeatured(fileName: string, file: File) {
    if (fileName && file !== undefined || null) {
        try {
            const { data, error } = await supabase
                .storage
                .from('images-featured')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false,
                });
            if (error?.message.toString() === "The resource already exists") {
                return getPublicUrl(fileName, 'images-featured');
            }
            if (data) {
                return getPublicUrl(fileName, 'images-featured');
            }
        } catch (error) {
            console.error('Error:', error);
            return "A imagem não pode ser enviada."
        }
    }
}

export {
    getPostById, getPosts, insertPost, updatePost, uploadImageFeatured
};
