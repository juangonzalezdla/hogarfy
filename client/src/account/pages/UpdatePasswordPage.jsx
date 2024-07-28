import AccountLayout from '../components/AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import { useUser } from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import updatePasswordSchema from '../../schemas/updatePassword.schema';

export default function UpdatePasswordPage() {
  const { updatePassword } = useUser();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data) => {
    await updatePassword(params.id, data);
    setValue('oldPassword', '');
    setValue('newPassword', '');
  };

  return (
    <AccountLayout>
      <h2 className='font-bold text-blue text-xl mb-5'>
        Actualizar Contraseña
      </h2>
      <Toaster />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full flex justify-start items-center flex-wrap gap-5'>
          <div className='w-60'>
            <Label
              htmlFor='oldPassword'
              value='Contraseña actual'
              className='mb-2 block'
            />
            <TextInput
              id='oldPassword'
              type='password'
              {...register('oldPassword')}
            />
            {errors.oldPassword?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.oldPassword?.message}
              </p>
            )}
          </div>

          <div className='w-60'>
            <Label
              htmlFor='newPassword'
              value='Contraseña nueva'
              className='mb-2 block'
            />
            <TextInput
              id='newPassword'
              type='Password'
              {...register('newPassword')}
            />
            {errors.newPassword?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.newPassword?.message}
              </p>
            )}
          </div>
        </div>

        <Button className='mt-5' type='submit'>
          Actualizar Contraseña
        </Button>
      </form>
    </AccountLayout>
  );
}
