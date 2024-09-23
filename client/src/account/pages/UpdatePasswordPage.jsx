import AccountLayout from '../AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import ValidationForm from '../../components/ValidationForm';
import { updatePasswordSchema } from '../../schemas/user';

import { useUser } from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
        <div className='w-full grid grid-cols-2 gap-5 max-md:grid-cols-1'>
          <div className='w-full'>
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
              <ValidationForm message={errors.oldPassword?.message} />
            )}
          </div>

          <div className='w-full'>
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
              <ValidationForm message={errors.newPassword?.message} />
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
