import { z } from 'zod';

export const cedulaDTOSchema = z
  .string(
    { required_error: 'Cedula es requerida' })
  .length(10, 
    { message: 'Cedula debe tener 10 numeros de longitud' }
  );

export const nameDTOSchema = z
  .string(
    { required_error: 'Nombres son requeridos' })
  .min(2, 
    { message: 'Nombres debe tener mínimo 2 caracteres de longitud' })
  .max(20, 
    { message: 'Nombres debe tener máximo 20 caracteres de longitud' }
  );

export const lastNameDTOSchema = z
  .string(
    { required_error: 'Apellidos son requeridos' })
  .min(2, 
    { message: 'Apellidos debe tener mínimo 2 caracteres de longitud' })
  .max(20, 
    { message: 'Apellidos debe tener máximo 20 caracteres de longitud' }
  );

export const addressDTOSchema = z
  .string(
    { required_error: 'Direccion es requerida'}
  );

export const phoneDTOSchema = z
  .string(
    { required_error: 'Numero de celular es requerido' })
  .length(10, 
    { message: 'Numero de celular debe tener 10 numeros de longitud' }
  );

export const emailDTOSchema = z
  .string({
    required_error: 'Email es requerido',
    invalid_type_error: 'Tipo de email no es válido, debe ser un String' })
  .email(
    { message: 'Formato de email no es válido, debe cumplir el RFC 5322' }
  );

export const passwordDTOSchema = z
  .string({
    required_error: 'Contraseña es requerida',
    invalid_type_error: 'Tipo de contraseña no es válido, debe ser un String' })
  .min(10, 
    { message: 'Contraseña debe tener mínimo 10 caracteres de longitud' })
  .max(25, 
    { message: 'Contraseña debe tener máximo 25 caracteres de longitud' })
  .refine((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value), 
    { message: 'Contraseña no válida, debe contener mínimo: Una mayúscula, una minúscula y un número' }
  );