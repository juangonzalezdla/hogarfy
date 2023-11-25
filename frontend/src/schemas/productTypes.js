import { z } from 'zod';

export const nameDTOSchema = z
  .string()
  .min(2,
    { message: 'Mínimo 2 caracteres de longitud' })
  .max(20,
    { message: 'Máximo 2 caracteres de longitud' }
  );

export const brandDTOSchema = z
  .string()
  .min(2,
    { message: 'Mínimo 2 caracteres de longitud' })
  .max(30,
    { message: 'Máximo 20 caracteres de longitud' }
  );

export const descriptionDTOSchema = z
  .string()
  .min(2,
    { message: 'Mínimo 2 caracteres de longitud' })
  .max(200,
    { message: 'Máximo 20 caracteres de longitud' }
  );