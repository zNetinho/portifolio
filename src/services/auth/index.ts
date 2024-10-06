import { UserSchemaType } from "@/schemas/login-schema";
import { createClientBrowser } from "../db/server";

type userDto = {
    email: string
    password: string
}

export async function getUser({ email }: userDto) {
    const supabase = createClientBrowser()

    const user = await supabase.from('users').select('*')

    if (!user) {
        return null
    }
    return user
}

export async function validateCredentials(data: userDto) {

    const user = await getUser(data)

    if (!user) {
        return false
    }
    else if (user.data[0].password == data.password) {
        return true
    }
    return false

}

export const onSubmit = async (data: UserSchemaType, e: any) => {
    e.preventDefault()
    if (await validateCredentials(data)) {
        window.location.href = '/admin'
    } else {
        alert("Usuário ou senha inválidos")
    }
};