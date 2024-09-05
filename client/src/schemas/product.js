import { z } from 'zod';
import { nameSchema, brandSchema, categorySchema, propertiesSchema, descriptionSchema, priceSchema, imagesSchema, isFeaturedSchema } from './productTypes';

export const productSchema = z.object(
  {
    name: nameSchema,
    brand: brandSchema,
    category: categorySchema,
    properties: propertiesSchema,
    images: imagesSchema,
    price: priceSchema,
    description: descriptionSchema,
    isFeatured: isFeaturedSchema,
  }
);
