import { createClientBrowser } from "../db/server";

type userDto = {
    email: string
}

export async function getUser({ email }: userDto) {
    const supabase = createClientBrowser()

    const user = await supabase.from('users').select('*')

    if (!user) {
        return null
    }
    return user
}