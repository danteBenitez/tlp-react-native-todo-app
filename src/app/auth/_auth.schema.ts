import { z } from "zod";

const UPPERCASE_REGEX = /[A-Z]/;
const LOWERCASE_REGEX = /[a-z]/;
const SYMBOL_REGEX = /[.*/@\-?¿!¡]/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginSchema = z.object({
    username: z.string().min(5, {
        message: "El nombre de usuario debe tener al menos 5 caracteres"
    }).max(10, {
        message: "El nombre de usuario no debe tener más de 10 caracteres"
    }),
    password: z.string().min(5, {
        message: "La contraseña debe tener al menos 5 caracteres"
    }).regex(UPPERCASE_REGEX, {
        message: "La contraseña debe tener al menos una mayúscula"
    }).regex(LOWERCASE_REGEX, {
        message: "La contraseña debe tener al menos una minúscula"
    }).regex(SYMBOL_REGEX, {
        message: "La contraseña debe tener al menos un símbolo"
    })
})

export const signUpSchema = loginSchema.extend({
    email: z.string().regex(EMAIL_REGEX, {
        message: "El email no es válido"
    })
})