import { getPosts, insertPost, uploadImageFeatured } from "@/services/db/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const posts = await getPosts();
    return NextResponse.json(posts)
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let publicUrl;
        const formData = await req.formData();
        if (formData) {
            const file = formData.get("image_featured") as File;
            // upload no supabase
            publicUrl = await uploadImageFeatured(file.name, file);
            console.log(publicUrl)
            // Coleta dos outros dados do post
            const title = formData.get("title")?.toString() || "";
            const description = formData.get("description")?.toString() || "";
            const content = formData.get("content")?.toString() || "";
            const slug = formData.get("slug")?.toString() || "";
            const authorid = formData.get("authorId")?.toString() || "";
            const image_featured = typeof publicUrl === 'string' ? publicUrl : publicUrl || "";

            console.log(title, description, content, slug, authorid, image_featured);

            const { data, error } = await insertPost({ title, description, content, slug, authorid, image_featured });

            if (data) {
                return NextResponse.json({ data }, { status: 200 });
            }
            if (error) {
                console.log("Error: ", error.message);
                throw new Error(error.message);
            }
            return NextResponse.json({ error: "Erro ao inserir post" }, { status: 400 });
        }
        // upload no disco
        // const arrayBuffer = await file.arrayBuffer();
        // const buffer = new Uint8Array(arrayBuffer);
        // await fs.writeFile(`./public/uploads/${file.name}`, buffer);

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
