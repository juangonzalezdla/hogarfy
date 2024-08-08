import { z } from 'zod';
import { namesSchema, lastNamesSchema, identificationCardSchema, phoneNumberSchema, cityAndDepartmentSchema, addressSchema, emailSchema, passwordSchema } from './userTypes';

export const logUpSchema = z.object(
  {
    names: namesSchema,
    lastNames: lastNamesSchema,
    identificationCard: identificationCardSchema,
    phoneNumber: phoneNumberSchema,
    cityAndDepartment: cityAndDepartmentSchema,
    address: addressSchema,
    email: emailSchema,
    password: passwordSchema
  }
);

export const logInSchema = z.object(
  {
    email: emailSchema,
    password: passwordSchema
  }
);

export const updateUserSchema = z.object(
  {
    names: namesSchema,
    lastNames: lastNamesSchema,
    phoneNumber: phoneNumberSchema,
    cityAndDepartment: cityAndDepartmentSchema,
    address: addressSchema
  }
);

export const updateEmailSchema = z.object(
  {
    email: emailSchema,
    password: passwordSchema
  }
);

export const updatePasswordSchema = z.object(
  {
    oldPassword: passwordSchema,
    newPassword: passwordSchema
  }
);

export const deleteSchema = z.object(
  {
    password: passwordSchema
  }
);
