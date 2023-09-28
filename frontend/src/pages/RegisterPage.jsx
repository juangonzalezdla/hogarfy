import BasicHeader from '../components/BasicHeader';
import Main from '../components/form/Main';
import FormContainer from '../components/form/FormContainer';
import FormTitle from '../components/form/FormTitle';
import Form from '../components/form/Form';
import { Input } from '../components/form/Input';
import MessageLink from '../components/form/MessageLink';
import ErrorMessage from '../components/form/ErrorMessage';
import SuccessMessage from '../components/form/SuccessMessage';

import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegisterSchema } from '../schemas/user.js';
import { zodResolver } from '@hookform/resolvers/zod';

function RegisterPage() {
  useEffect(() => {
    document.title = 'Registrarse | Hogarfy';
  }, []);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(userRegisterSchema)
  });

  const { signup, successMessage, errorsMessage, isRegistered } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => await signup(data);
  
  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  return (
    <>
      <BasicHeader />
      <Main>
        <FormContainer>
          <FormTitle title='Registrate' />
          {
            errorsMessage.map((error, i) => (
              <ErrorMessage message={error} key={i} />
            ))
          }
          {
            successMessage.map((success, i) => (
              <SuccessMessage message={success} key={i} />
            ))
          }
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col'>
              <Input 
                type="text"
                placeholder='Ingresa tú cedula'
                {...register('cedula')}
              />
              {errors.cedula?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.cedula?.message}</p>
              )}

              <Input 
                type="text"
                placeholder='Nombres'
                {...register('name')}
              />
              {errors.name?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.name?.message}</p>
              )}

              <Input 
                type="text"
                placeholder='Apellidos'
                {...register('lastName')}
              />
              {errors.lastName?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.lastName?.message}</p>
              )}

              <Input 
                type="text"
                placeholder='Direccion - ciudad'
                {...register('address')}
              />
              {errors.address?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.address?.message}</p>
              )}

              <Input 
                type="text"
                placeholder='Número de celular'
                {...register('phone')}
              />
              {errors.phone?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.phone?.message}</p>
              )}  

              <Input 
                type="email"
                placeholder='Correo electronico'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.email?.message}</p>
              )}

              <Input 
                type="password"
                placeholder='Contraseña'
                {...register('password')}
              />
              {errors.password?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.password?.message}</p>
              )}
            </div> 

            <button 
              type="submit"
              className='mt-10 bg-blanco hover:bg-azul px-6 py-2.5 text-base 
              text-azul hover:text-blanco font-bold border-2 border-solid border-azul 
              rounded-[20px]'
            >
              Registrarme
            </button>

            <MessageLink 
              message='¿Ya tienes una cuenta?'
              to='/auth/login'
              name='Iniciar sesión'
            />
          </Form>
        </FormContainer>
      </Main>
    </>
  )
};

export default RegisterPage;