import { z } from "zod";

export const PostSchema = z.object({
    title: z.string().min(2, { message: "Título muito curto" }),
    description: z.string().min(2, { message: "Descrição muito curta" }).max(160, { message: "Descrição muito longa" }),
    content: z.string().min(2, { message: "Conteúdo muito curto" }),
    slug: z.string().min(2, { message: "Slug muito curto" }).toLowerCase().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: "Slug inválido" }),
    authorid: z.string()
})