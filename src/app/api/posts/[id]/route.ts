import { getPostById, insertPost, updatePost } from '@/services/db/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const postId = Number(params.id);
    const post = await getPostById(postId);
    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
}

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { id, title, description, slug, content, authorid, image_featured } = body;
    console.log(body)
    if (title && description) {
        const { data, error } = await updatePost({ id, title, description, content, slug, authorid });
        if (data && data !== undefined) return NextResponse.json(data);
        if (error) throw new Error(error.message)
    }

    return NextResponse.json('Failed to create')
}
