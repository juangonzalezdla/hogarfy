import { z } from 'zod';

const updateUserSchema = z.object({
  names: z
    .string({ required_error: 'Nombres son requeridos' })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(30, { message: 'Máximo 30 caracteres' }),
  lastNames: z
    .string({ required_error: 'Apellidos son requeridos' })
    .min(4, { message: 'Mínimo 4 caracteres' })
    .max(30, { message: 'Máximo 30 caracteres' }),
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
});

export default updateUserSchema;
