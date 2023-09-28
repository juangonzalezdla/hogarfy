import { z } from 'zod';
import { 
  addressDTOSchema, 
  cedulaDTOSchema, 
  emailDTOSchema, 
  lastNameDTOSchema, 
  nameDTOSchema, 
  passwordDTOSchema, 
  phoneDTOSchema 
} from './userTypes.js';

export const userRegisterSchema = z.object(
  {
    cedula: cedulaDTOSchema,
    name: nameDTOSchema,
    lastName: lastNameDTOSchema,
    address: addressDTOSchema,
    phone: phoneDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema
  }
);

export const userLoginSchema = z.object(
  {
    email: emailDTOSchema,
    password: passwordDTOSchema
  }
);

export const userUpdateDataSchema = z.object(
  {
    name: nameDTOSchema,
    lastName: lastNameDTOSchema,
    address: addressDTOSchema,
    phone: phoneDTOSchema
  }
);

export const userUpdateEmailSchema = z.object(
  {
    email: emailDTOSchema,
    password: passwordDTOSchema
  }
);

export const userUpdatePasswordSchema = z.object(
  {
    oldPassword: passwordDTOSchema,
    newPassword: passwordDTOSchema
  }
);

export const userDeleteSchema = z.object(
  {
    password: passwordDTOSchema
  }
);