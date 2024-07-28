import AccountLayout from '../components/AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import { useUser } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import updateEmailSchema from '../../schemas/updateEmail.schema';

export default function UpdateEmailPAge() {
  const { getUser, updateEmail } = useUser();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateEmailSchema),
  });

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue('email', user.email);
      }
    };
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await updateEmail(params.id, data);
    setValue('password', '');
    getUser(params.id);
  };

  return (
    <AccountLayout>
      <Toaster />
      <h2 className='font-bold text-blue text-xl mb-5'>Actualizar Email</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full flex justify-start items-center flex-wrap gap-5'>
          <div className='w-60'>
            <Label
              htmlFor='email'
              value='Correo electronico'
              className='mb-2 block'
            />
            <TextInput id='email' type='email' {...register('email')} />
            {errors.email?.message && (
              <p className='text-red-500 font-semibold'>
                {errors.email?.message}
              </p>
            )}
          </div>

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

        <Button className='mt-5' type='submit'>
          Actualizar Email
        </Button>
      </form>
    </AccountLayout>
  );
}
