import AccountLayout from '../AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import ValidationForm from '../../ui/ValidationForm';
import { deleteSchema } from '../../schemas/user';

import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
    resolver: zodResolver(deleteSchema),
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
        <div className='w-full flex justify-start items-center gap-5'>
          <div className='w-60 max-md:w-full'>
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
              <ValidationForm message={errors.password?.message} />
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
