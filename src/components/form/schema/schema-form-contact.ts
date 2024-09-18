import { z } from 'zod'

export const schemaFormContact = z.object({
    nameOfGuest: z.string().nonempty('Nome obrigatório'),
    email: z
        .string()
        .nonempty('E-mail obrigatório')
        .email('E-mail inválido'),
    message: z.string().nonempty('Mensagem obrigatória'),
})