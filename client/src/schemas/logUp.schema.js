import { z } from 'zod';

const logUpSchema = z.object({
  names: z
    .string({ required_error: 'Nombres son requeridos' })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(30, { message: 'Máximo 30 caracteres' }),
  lastNames: z
    .string({ required_error: 'Apellidos son requeridos' })
    .min(4, { message: 'Mínimo 4 caracteres' })
    .max(30, { message: 'Máximo 30 caracteres' }),
  citizenshipCard: z
    .string({ required_error: 'Cedula es requerida' })
    .min(6, { message: 'Cedula inválida' })
    .max(10, { message: 'Cedula inválida' }),
  phoneNumber: z
    .string({ required_error: 'Número de celular es requerido' })
    .length(10, { message: 'Número de celular inválido' }),
  cityAndDepartment: z
    .string({ required_error: 'Ciudad / Departamento, son requeridos' })
    .min(4, { message: 'Mínimo 4 caracteres' })
    .max(50, { message: 'Máximo 50 caracteres' }),
  address: z
    .string({ required_error: 'Dirección es requerida' })
    .min(4, { message: 'Mínimo 4 caracteres' })
    .max(50, { message: 'Máximo 50 caracteres' }),
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

export default logUpSchema;
