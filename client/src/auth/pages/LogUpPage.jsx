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
import { useNavigate } from 'react-router-dom';
import logUpSchema from '../../schemas/logUp.schema';

export default function LogUpPage() {
  const { logUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.title = 'Registro de usuario';
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(logUpSchema),
  });

  const onSubmit = async (data) => {
    await logUp(data);
    setGoToLogin(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (goToLogin) {
      const timer = setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [goToLogin]);

  return (
    <>
      <Toaster />
      <BasicHeader />
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle title='Registrate' />
          <div className='w-full flex flex-col'>
            <Input type='text' placeholder='Nombres' {...register('names')} />
            {errors.names?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.names?.message}
              </p>
            )}

            <Input
              type='text'
              placeholder='Apellidos'
              {...register('lastNames')}
            />
            {errors.lastNames?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.lastNames?.message}
              </p>
            )}

            <Input
              type='number'
              placeholder='Cédula'
              {...register('citizenshipCard')}
            />
            {errors.citizenshipCard?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.citizenshipCard?.message}
              </p>
            )}

            <Input
              type='number'
              placeholder='Número de teléfono'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.phoneNumber?.message}
              </p>
            )}

            <Input
              type='text'
              placeholder='Ciudad / Departamento'
              {...register('cityAndDepartment')}
            />
            {errors.cityAndDepartment?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.cityAndDepartment?.message}
              </p>
            )}

            <Input
              type='text'
              placeholder='Dirección'
              {...register('address')}
            />
            {errors.address?.message && (
              <p className='text-red-500 font-semibold ml-2'>
                {errors.address?.message}
              </p>
            )}

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
            className='mt-10 bg-white hover:bg-blue px-10 py-2.5 text-base text-blue hover:text-white font-bold border-2 border-solid border-blue rounded-full'
          >
            Registrarme
          </button>

          <MessageLink
            message='¿Ya tienes una cuenta?'
            to='/auth/login'
            name='Iniciar sesión'
          />
        </Form>
      </Main>
    </>
  );
}
