import { z } from 'zod';
import {
  nameDTOSchema,
  brandDTOSchema,
  descriptionDTOSchema,
} from './productTypes.js';

export const createProductSchema = z.object(
  {
    name: nameDTOSchema,
    brand: brandDTOSchema,
    description: descriptionDTOSchema,
  }
);

export const updateProductSchema = z.object(
  {
    name: nameDTOSchema,
    brand: brandDTOSchema,
    description: descriptionDTOSchema,
  }
);