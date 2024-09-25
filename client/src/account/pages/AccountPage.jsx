import AccountLayout from '../AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import ValidationForm from '../../ui/ValidationForm';
import { updateUserSchema } from '../../schemas/user';

import { useUser } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function AccountPage() {
  const { getUser, updateUser } = useUser();
  const params = useParams();

  useEffect(() => {
    document.title = 'Mi cuenta | Hogarfy';
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue('identificationCard', user.identificationCard);
        setValue('email', user.email);
        setValue('names', user.names);
        setValue('lastNames', user.lastNames);
        setValue('phoneNumber', user.phoneNumber);
        setValue('cityAndDepartment', user.cityAndDepartment);
        setValue('address', user.address);
      }
    };
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await updateUser(params.id, data);
    getUser(params.id);
  };

  return (
    <AccountLayout>
      <Toaster />
      <h2 className='font-bold text-blue text-xl mb-5'>Tus datos</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full grid grid-cols-2 gap-5 max-md:grid-cols-1'>
          <div className='w-full'>
            <Label
              htmlFor='identificationCard'
              value='Cedula'
              className='mb-2 block'
            />
            <TextInput
              id='identificationCard'
              type='text'
              disabled
              {...register('identificationCard')}
            />
          </div>

          <div className='w-full'>
            <Label
              htmlFor='email'
              value='Correo electronico'
              className='mb-2 block'
            />
            <TextInput
              id='email'
              type='email'
              disabled
              {...register('email')}
            />
          </div>

          <div className='w-full'>
            <Label htmlFor='names' value='Nombres' className='mb-2 block' />
            <TextInput id='names' type='text' {...register('names')} />
            {errors.names?.message && (
              <ValidationForm message={errors.names?.message} />
            )}
          </div>

          <div className='w-full'>
            <Label
              htmlFor='lastNames'
              value='Apellidos'
              className='mb-2 block'
            />
            <TextInput id='lastNames' type='text' {...register('lastNames')} />
            {errors.lastNames?.message && (
              <ValidationForm message={errors.lastNames?.message} />
            )}
          </div>

          <div className='w-full'>
            <Label
              htmlFor='phoneNumber'
              value='Número de telefono'
              className='mb-2 block'
            />
            <TextInput
              id='phoneNumber'
              type='number'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber?.message && (
              <ValidationForm message={errors.phoneNumber?.message} />
            )}
          </div>

          <div className='w-full'>
            <Label
              htmlFor='cityAndDepartment'
              value='Ciudad - Departamento'
              className='mb-2 block'
            />
            <TextInput
              id='cityAndDepartment'
              type='text'
              {...register('cityAndDepartment')}
            />
            {errors.cityAndDepartment?.message && (
              <ValidationForm message={errors.cityAndDepartment?.message} />
            )}
          </div>

          <div className='w-full'>
            <Label htmlFor='address' value='Dirección' className='mb-2 block' />
            <TextInput id='address' type='text' {...register('address')} />
            {errors.address?.message && (
              <ValidationForm message={errors.address?.message} />
            )}
          </div>
        </div>

        <Button className='mt-5' type='submit' color='purple'>
          Actualizar datos
        </Button>
      </form>
    </AccountLayout>
  );
}
