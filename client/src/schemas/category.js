import { z } from 'zod';
import { nameSchema, parentIdSchema, propertiesSchema } from './categoryTypes';

export const categorySchema = z.object(
  {
    name: nameSchema,
    parentId: parentIdSchema,
    properties: propertiesSchema
  }
);
