export type Post = {
    id: string
    title: string
    description: string
    content: string
    slug: string
    authorid: string
    createdat?: string
    updatedat?: string
    aggregatingRating?: number
}