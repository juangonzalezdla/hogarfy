import AccountLayout from '../components/AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import { useUser } from '../context/UserContext';
import { useAuth } from '../../auth/context/AuthContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import deleteUserSchema from '../../schemas/deleteUser.schema';

export default function DeleteAccountPage() {
  const { deleteUser } = useUser();
  const { logOut } = useAuth();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(deleteUserSchema),
  });

  const onSubmit = async (data) => {
    await deleteUser(params.id, data);
    setValue('password', '');
    logOut();
  };

  return (
    <AccountLayout>
      <h2 className='font-bold text-blue text-xl mb-5'>Eliminar cuenta</h2>
      <Toaster />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full flex justify-start items-center flex-wrap gap-5'>
          <div className='w-60'>
            <Label
              htmlFor='password'
              value='Contraseña'
              className='mb-2 block'
            />
            <TextInput
              id='password'
              type='password'
              {...register('password')}
            />
            {errors.password?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>

        <Button className='mt-5' type='submit' color='failure'>
          Eliminar cuenta
        </Button>
      </form>
    </AccountLayout>
  );
}
