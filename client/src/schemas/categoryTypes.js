import { z } from 'zod';

export const nameSchema = z
  .string({ required_error: 'Nombre es requerido' })
  .min(3, { message: 'Mínimo 3 caracteres' })
  .max(30, { message: 'Máximo 30 caracteres' });

export const parentIdSchema = z
  .string().optional();

export const propertiesSchema = z
  .array(
    z.object({
      name: z
        .string({ required_error: 'Nombre es requerido' })
        .regex(/^[A-Z]/, 'Debe comenzar con mayúscula'),
      values: z
        .string()
        .refine((val) => val.split(', ').every(v => /^[A-Z]/.test(v)), {
          message: 'Deben comenzar con mayúscula, seguido una coma y un espacio',
        }),

    }).optional(),
  )
