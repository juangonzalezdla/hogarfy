import { z } from 'zod';

export const nameSchema = z
  .string()
  .min(3, { message: 'Mínimo 3 caracteres' })
  .max(60, { message: 'Máximo 60 caracteres' });

export const brandSchema = z
  .string()
  .min(2, { message: 'Mínimo 2 caracteres' })
  .max(30, { message: 'Máximo 30 caracteres' });

export const categorySchema = z
  .string()
  .min(1, { message: 'Categoría es obligatoria' });

export const propertiesSchema = z.object().optional();

export const imagesSchema = z
  .array(z.object({
    url: z.string().url(),
    publicId: z.string(),
  }))
  .optional();

export const priceSchema = z
  .number()
  .positive({ message: 'Precio debe ser mayor a 0' });

export const descriptionSchema = z
  .string()
  .min(20, 'Descripción deber ser mínimo 20 caracteres')
  .max(800, 'Descripción debe ser máximo 800 caracteres');

export const isFeaturedSchema = z.boolean();
