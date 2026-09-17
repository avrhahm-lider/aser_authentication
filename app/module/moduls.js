import z from "zod";

export const RegisterType = z.object({
    name : z.string().min(1),
    email: z.email(),
    password: z.string().min(8)

})

export const LoginType = z.object({
    email: z.email(),
    password: z.string().min(8)

})