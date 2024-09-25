import BasicHeader from '../../ui/BasicHeader';
import Form from '../../ui/auth/Form';
import Container from '../../ui/Container';
import FormTitle from '../../ui/auth/FormTitle';
import { Input } from '../../ui/auth/Input';
import MessageLink from '../../ui/auth/MessageLink';
import { Toaster } from 'react-hot-toast';
import ValidationForm from '../../ui/ValidationForm';
import { logUpSchema } from '../../schemas/user';

import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

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
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle title='Registrate' />
          <div className='w-full flex flex-col'>
            <Input type='text' placeholder='Nombres' {...register('names')} />
            {errors.names?.message && (
              <ValidationForm message={errors.names?.message} />
            )}

            <Input
              type='text'
              placeholder='Apellidos'
              {...register('lastNames')}
            />
            {errors.lastNames?.message && (
              <ValidationForm message={errors.lastNames?.message} />
            )}

            <Input
              type='number'
              placeholder='Cédula'
              {...register('citizenshipCard')}
            />
            {errors.identificationCard?.message && (
              <ValidationForm message={errors.identificationCard?.message} />
            )}

            <Input
              type='number'
              placeholder='Número de teléfono'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber?.message && (
              <ValidationForm message={errors.phoneNumber?.message} />
            )}

            <Input
              type='text'
              placeholder='Ciudad / Departamento'
              {...register('cityAndDepartment')}
            />
            {errors.cityAndDepartment?.message && (
              <ValidationForm message={errors.cityAndDepartment?.message} />
            )}

            <Input
              type='text'
              placeholder='Dirección'
              {...register('address')}
            />
            {errors.address?.message && (
              <ValidationForm message={errors.address?.message} />
            )}

            <Input
              type='email'
              placeholder='Correo electrónico'
              {...register('email')}
            />
            {errors.email?.message && (
              <ValidationForm message={errors.email?.message} />
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
                className='absolute right-4 top-[70%] transform -translate-y-1/2 bg-transparent border-none'
              >
                {showPassword ? (
                  <i className='bx bxs-hide text-blue bx-sm'></i>
                ) : (
                  <i className='bx bxs-show text-blue bx-sm'></i>
                )}
              </button>
            </div>
            {errors.password?.message && (
              <ValidationForm message={errors.password?.message} />
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
      </Container>
    </>
  );
}
