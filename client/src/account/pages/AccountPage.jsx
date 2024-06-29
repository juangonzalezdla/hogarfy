import AccountLayout from '../components/AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import { useUser } from '../context/UserContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import updateUserSchema from '../../schemas/updateUser.schema';

export default function AccountPage() {
  const { getUser, updateUser } = useUser();
  const params = useParams();

  useEffect(() => {
    document.title = 'Mi cuenta | Hogarfy';
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue('citizenshipCard', user.citizenshipCard);
        setValue('email', user.email);
        setValue('names', user.names);
        setValue('lastNames', user.lastNames);
        setValue('address', user.address);
        setValue('phoneNumber', user.phoneNumber);
      }
    };
    loadUser();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });

  const onSubmit = async (data) => {
    await updateUser(data);
    getUser();
  };

  return (
    <AccountLayout>
      <Toaster />
      <h2 className='font-bold text-blue text-xl mb-5'>Tus datos</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full flex justify-start items-center flex-wrap gap-5'>
          <div className='w-[260px]'>
            <Label htmlFor='citizenshipCard' value='Cedula' className='mb-2 block' />
            <TextInput
              id='citizenshipCard'
              type='text'
              disabled
              {...register('citizenshipCard')}
            />
          </div>

          <div className='w-[260px]'>
            <Label
              htmlFor='email'
              value='Correo electronico'
              className='mb-2 block'
            />
            <TextInput id='email' type='text' disabled {...register('email')} />
          </div>

          <div className='w-[260px]'>
            <Label htmlFor='names' value='Nombres' className='mb-2 block' />
            <TextInput id='names' type='text' {...register('names')} />
            {errors.name?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className='w-[260px]'>
            <Label
              htmlFor='lastName'
              value='Apellidos'
              className='mb-2 block'
            />
            <TextInput id='lastName' type='text' {...register('lastNames')} />
            {errors.lastName?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.lastName?.message}
              </p>
            )}
          </div>

          <div className='w-[260px]'>
            <Label htmlFor='address' value='Dirección' className='mb-2 block' />
            <TextInput id='address' type='text' {...register('address')} />
            {errors.address?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.address?.message}
              </p>
            )}
          </div>

          <div className='w-[260px]'>
            <Label
              htmlFor='phone'
              value='Número de telefono'
              className='mb-2 block'
            />
            <TextInput id='phone' type='text' {...register('phoneNumber')} />
            {errors.phoneNumber?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.phoneNumber?.message}
              </p>
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
