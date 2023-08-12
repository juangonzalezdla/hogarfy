import { z } from 'zod';

export const cedulaDTOSchema = z
  .string()
  .length(10, 
    { message: 'Cedula debe tener 10 numeros de longitud' }
  );

export const nameDTOSchema = z
  .string()
  .min(2, 
    { message: 'Mínimo 2 caracteres de longitud' })
  .max(20, 
    { message: 'Máximo 20 caracteres de longitud' }
  );

export const lastNameDTOSchema = z
  .string()
  .min(2, 
    { message: 'Mínimo 2 caracteres de longitud' })
  .max(20, 
    { message: 'Máximo 20 caracteres de longitud' }
  );

export const addressDTOSchema = z
  .string()
  .min(1, { message: 'Direccion es requerida' });

export const phoneDTOSchema = z
  .string()
  .length(10, 
    { message: 'Bebe tener 10 numeros de longitud' }
  );

export const emailDTOSchema = z
  .string()
  .email(
    { message: 'Email es Requerido' }
  );

export const passwordDTOSchema = z
  .string()
  .min(10, 
    { message: 'Mínimo 10 caracteres de longitud' })
  .max(25, 
    { message: 'Máximo 25 caracteres de longitud' })
  .refine((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value), 
    { message: 'Mínimo: Una mayúscula, una minúscula y un número' }
  );