export type PostDTO = {
    id?: number
    title: string
    description: string
    content: string
    slug: string
    authorid: string
    image_featured?: string | undefined
}