import {z} from 'zod';

export const signInSchema = z.object({
    identifier: z.string(), //identifier is a better name used for username
    password: z.string()
})