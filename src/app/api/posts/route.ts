import { getPosts, insertPost } from "@/services/db/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const posts = await getPosts();
    return NextResponse.json(posts)
}

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { title, description, slug, content, authorid } = body;
    console.log({ title, description, slug, content })

    if (title && description) {
        const { data, error } = await insertPost({ title, description, content, slug, authorid });
        if (data) return data;
        if (error) throw new Error(error.message)
        return NextResponse.json(data);
    }
}
