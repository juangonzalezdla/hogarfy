import { z } from 'zod';
import { nameSchema, brandSchema, descriptionSchema, imagesSchema } from './productTypes';

export const productSchema = z.object(
  {
    name: nameSchema,
    brand: brandSchema,
    images: imagesSchema,
    description: descriptionSchema
  }
);
