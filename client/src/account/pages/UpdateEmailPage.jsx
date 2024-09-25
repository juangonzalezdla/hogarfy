import AccountLayout from '../AccountLayout';
import { Button, Label, TextInput } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import ValidationForm from '../../ui/ValidationForm';
import { updateEmailSchema } from '../../schemas/user';

import { useUser } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
        <div className='w-full grid grid-cols-2 gap-5 max-md:grid-cols-1'>
          <div className='w-full'>
            <Label
              htmlFor='email'
              value='Correo electronico'
              className='mb-2 block'
            />
            <TextInput id='email' type='email' {...register('email')} />
            {errors.email?.message && (
              <ValidationForm message={errors.email?.message} />
            )}
          </div>

          <div className='w-full'>
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

        <Button className='mt-5' type='submit'>
          Actualizar Email
        </Button>
      </form>
    </AccountLayout>
  );
}
