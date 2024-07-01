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
        setValue('citizenshipCard', user.citizenshipCard);
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
        <div className='w-full flex justify-start items-center flex-wrap gap-5'>
          <div className='w-60'>
            <Label
              htmlFor='citizenshipCard'
              value='Cedula'
              className='mb-2 block'
            />
            <TextInput
              id='citizenshipCard'
              type='text'
              disabled
              {...register('citizenshipCard')}
            />
          </div>

          <div className='w-60'>
            <Label
              htmlFor='email'
              value='Correo electronico'
              className='mb-2 block'
            />
            <TextInput id='email' type='email' disabled {...register('email')} />
          </div>

          <div className='w-60'>
            <Label htmlFor='names' value='Nombres' className='mb-2 block' />
            <TextInput id='names' type='text' {...register('names')} />
            {errors.name?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className='w-60'>
            <Label
              htmlFor='lastNames'
              value='Apellidos'
              className='mb-2 block'
            />
            <TextInput id='lastNames' type='text' {...register('lastNames')} />
            {errors.lastNames?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.lastNames?.message}
              </p>
            )}
          </div>

          <div className='w-60'>
            <Label
              htmlFor='phoneNumber'
              value='Número de telefono'
              className='mb-2 block'
            />
            <TextInput
              id='phoneNumber'
              type='text'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.phoneNumber?.message}
              </p>
            )}
          </div>

          <div className='w-60'>
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
              <p className='text-red-500 font-semibold'>
                {errors.cityAndDepartment?.message}
              </p>
            )}
          </div>

          <div className='w-60'>
            <Label htmlFor='address' value='Dirección' className='mb-2 block' />
            <TextInput id='address' type='text' {...register('address')} />
            {errors.address?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.address?.message}
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
