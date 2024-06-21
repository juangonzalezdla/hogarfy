import { z } from 'zod';

const updateEmailSchema = z.object({
  email: z
    .string({
      required_error: 'Email es requerido',
      invalid_type_error: 'Email debe ser un string'
    })
    .email({ message: 'Email inválido' }),
  password: z
    .string({ required_error: 'Contraseña es requerida' })
    .min(10, { message: 'Mínimo 10 caracteres' })
    .max(25, { message: 'Máximo 25 caracteres' })
    .refine((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value),
      { message: 'Contraseña inválida, Mínimo: Una mayúscula, una minúscula y un número' }
    ),
});

export default updateEmailSchema;
