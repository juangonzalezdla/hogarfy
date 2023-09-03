import BasicHeader from '../components/BasicHeader';
import Main from '../components/form/Main';
import FormContainer from '../components/form/FormContainer';
import FormTitle from '../components/form/FormTitle';
import Form from '../components/form/Form';
import { Input } from '../components/form/Input';
import MessageLink from '../components/form/MessageLink';
import ErrorMessage from '../components/form/ErrorMessage';

import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoginSchema } from '../schemas/user.js';
import { zodResolver } from '@hookform/resolvers/zod';

function LoginPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(userLoginSchema)
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  useEffect(() => {
    document.title = 'Iniciar sesión | Hogarfy';
  }, []);

  return (
    <>
      <BasicHeader />
      <Main>
        <FormContainer>
          <FormTitle title='Iniciar sesión' />
          {
            loginErrors.map((error, i) => (
              <ErrorMessage message={error} key={i} />
            ))
          }
          <Form onSubmit={handleSubmit(onSubmit)}>       
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
              className='mt-10 bg-azul px-6 py-2.5 text-base text-blanco 
              font-bold border-2 border-solid border-azul rounded-[20px]'
            >
              Ingresar
            </button>

            <MessageLink 
              message='¿Aún no tienes una cuenta?'
              to='/register'
              name='Registrate'
            />
          </Form>
        </FormContainer>
      </Main>
    </>
  )
};

export default LoginPage;