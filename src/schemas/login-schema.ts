import { z } from "zod";

export const UserSchema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(2, { message: "Senha muito curta" }),
});

export type UserSchemaType = z.infer<typeof UserSchema>