import { Input } from '../components/Input';
import BasicHeader from '../components/BasicHeader';
import Main from '../components/Main';
import FormContainer from '../components/FormContainer';
import FormTitle from '../components/FormTitle';
import Form from '../components/Form';
import MessageLink from '../components/MessageLink';
import ErrorMessage from '../components/ErrorMessage';

import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegisterSchema } from '../schemas/user.js';
import { zodResolver } from '@hookform/resolvers/zod';

function RegisterPage() {
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(userRegisterSchema)
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/login')
  }, [isAuthenticated]);

  const onSubmit = async(values) => {
    signup(values);
  };

  return (
    <>
      <BasicHeader />

      <Main>
        {
          registerErrors.map((error, i) => (
            <ErrorMessage message={error} key={i} />
          ))
        }
        <FormContainer>
          <FormTitle title='Registrate' />

          <Form onSubmit={handleSubmit(onSubmit)}> 
            <Input 
              type="text"
              placeholder='Ingresa tú cedula'
              {...register('cedula')}
            />
            {errors.cedula?.message && (
              <p className='text-red-500 font-semibold'>{errors.cedula?.message}</p>
            )}

            <Input 
              type="text"
              placeholder='Nombres'
              {...register('name')}
            />
            {errors.name?.message && (
              <p className='text-red-500 font-semibold'>{errors.name?.message}</p>
            )}

            <Input 
              type="text"
              placeholder='Apellidos'
              {...register('lastName')}
            />
            {errors.lastName?.message && (
              <p className='text-red-500 font-semibold'>{errors.lastName?.message}</p>
            )}

            <Input 
              type="text"
              placeholder='Direccion - Ciudad'
              {...register('address')}
            />
            {errors.address?.message && (
              <p className='text-red-500 font-semibold'>{errors.address?.message}</p>
            )}

            <Input 
              type="text"
              placeholder='Número de celular'
              {...register('phone')}
            />
            {errors.phone?.message && (
              <p className='text-red-500 font-semibold'>{errors.phone?.message}</p>
            )}  

            <Input 
              type="email"
              placeholder='Correo electronico'
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='text-red-500 font-semibold'>{errors.email?.message}</p>
            )}

            <Input 
              type="password"
              placeholder='Contraseña'
              {...register('password')}
            />
            {errors.password?.message && (
              <p className='text-red-500 font-semibold'>{errors.password?.message}</p>
            )}

            <button 
              type="submit"
              className='mt-10 bg-blanco hover:bg-azul px-[25px] py-[10px] text-base 
              text-azul hover:text-blanco font-bold border-2 border-solid border-azul 
              rounded-[20px]'
            >
              Registrarme
            </button>

            <MessageLink 
              message='¿Ya tienes una cuenta?'
              to='/login'
              name='Iniciar sesión'
            />
          </Form>
        </FormContainer>
      </Main>
    </>
  )
}

export default RegisterPage;