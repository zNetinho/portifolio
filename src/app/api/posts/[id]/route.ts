// src/app/api/posts/[id]/route.ts
import { getPostById } from '@/services/db/posts';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const postId = Number(params.id);
    const post = await getPostById(postId);
    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
}
