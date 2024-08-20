import { z } from 'zod';

export const namesSchema = z
  .string()
  .min(3, { message: 'Mínimo 3 caracteres' })
  .max(30, { message: 'Máximo 30 caracteres' });

export const lastNamesSchema = z
  .string()
  .min(4, { message: 'Mínimo 4 caracteres' })
  .max(30, { message: 'Máximo 30 caracteres' });

export const identificationCardSchema = z
  .string({ required_error: 'Cédula es requerida' })
  .min(6, { message: 'Cedula inválida' })
  .max(10, { message: 'Cedula inválida' });

export const phoneNumberSchema = z
  .string()
  .length(10, { message: 'Número de celular inválido' });

export const cityAndDepartmentSchema = z
  .string()
  .min(4, { message: 'Mínimo 4 caracteres' })
  .max(50, { message: 'Máximo 50 caracteres' });

export const addressSchema = z
  .string()
  .min(4, { message: 'Mínimo 4 caracteres' })
  .max(50, { message: 'Máximo 50 caracteres' });

export const emailSchema = z
  .string()
  .email({ message: 'Email es requerido' });

export const passwordSchema = z
  .string()
  .min(10, { message: 'Mínimo 10 caracteres' })
  .max(25, { message: 'Máximo 25 caracteres' })
  .refine((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value),
    { message: 'Mínimo: Una mayúscula, una minúscula y un número' }
  );
