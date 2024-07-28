import BasicHeader from '../../components/BasicHeader';
import Form from '../components/Form';
import Main from '../components/Main';
import FormTitle from '../components/FormTitle';
import { Input } from '../components/Input';
import MessageLink from '../components/MessageLink';
import { Toaster } from 'react-hot-toast';

import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import logInSchema from '../../schemas/logIn.schema';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
  const { logIn, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Cambia el titulo a la pagina
    document.title = 'Inicio de sesión';
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data) => await logIn(data);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Toaster />
      <BasicHeader />
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle title='Iniciar sesión' />

          <div className='w-full flex flex-col'>
            <Input
              type='email'
              placeholder='Correo electrónico'
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.email?.message}
              </p>
            )}

            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
                {...register('password')}
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-4 top-2/3 transform -translate-y-1/2 bg-transparent border-none'
              >
                {showPassword ? (
                  <i className='bx bxs-hide text-blue bx-sm'></i>
                ) : (
                  <i className='bx bxs-show text-blue bx-sm'></i>
                )}
              </button>
            </div>
            {errors.password?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='mt-10 bg-blue px-10 py-2.5 text-base text-white font-bold rounded-full'
          >
            Ingresar
          </button>

          <MessageLink
            message='¿Aún no tienes una cuenta?'
            to='/auth/logup'
            name='Registrate'
          />
        </Form>
      </Main>
    </>
  );
}
