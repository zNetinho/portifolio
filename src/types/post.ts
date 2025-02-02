export type Post = {
    id: string
    title: string
    description: string
    content: string
    slug: string
    image_featured?: string | undefined
    authorid: string
    createdat?: string
    updatedat?: string
    aggregatingRating?: number
}