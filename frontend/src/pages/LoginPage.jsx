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
        {
          loginErrors.map((error, i) => (
            <ErrorMessage message={error} key={i} />
          ))
        }
        <FormContainer>
          <FormTitle title='Iniciar sesión' />

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
              className='mt-10 bg-azul px-[25px] py-[10px] text-base text-blanco 
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