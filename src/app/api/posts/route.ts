import { getPosts, insertPost } from "@/services/db/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const posts = await getPosts();
    return NextResponse.json(posts)
}

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { title, description, slug, content } = body;
    console.log({ title, description, slug, content })

    if (title && description) {
        const data = await insertPost({ title, description, content, slug, authorId: "1" });
        if (data) return data;
        return NextResponse.json(data);
    }
}
