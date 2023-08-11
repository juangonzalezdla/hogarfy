import { z } from 'zod';
import { 
  addressDTOSchema, 
  cedulaDTOSchema, 
  emailDTOSchema, 
  lastNameDTOSchema, 
  nameDTOSchema, 
  passwordDTOSchema, 
  phoneDTOSchema 
} from './dto-types.js';

export const userRegisterDTOSchema = z.object(
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

export const userLoginDTOSchema = z.object(
  {
    email: emailDTOSchema,
    password: passwordDTOSchema
  }
);

export const userUpdateDataDTOSchema = z.object(
  {
    name: nameDTOSchema,
    lastName: lastNameDTOSchema,
    address: addressDTOSchema,
    phone: phoneDTOSchema
  }
);

export const userUpdateEmailDTOSchema = z.object(
  {
    email: emailDTOSchema,
    password: passwordDTOSchema
  }
);

export const userUpdatePasswordDTOSchema = z.object(
  {
    oldPassword: passwordDTOSchema,
    newPassword: passwordDTOSchema
  }
);

export const userUnregisterDTOSchema = z.object(
  {
    password: passwordDTOSchema
  }
);