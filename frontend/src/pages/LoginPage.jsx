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
import { userLoginSchema } from '../schemas/user.js';
import { zodResolver } from '@hookform/resolvers/zod';

function LoginPage() {
  useEffect(() => {
    document.title = 'Iniciar sesión | Hogarfy';
  }, []);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(userLoginSchema)
  });

  const { signin, successMessage, errorsMessage, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => await signin(data);

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
      <BasicHeader />
      <Main>
        <FormContainer>
          <FormTitle title='Iniciar sesión' />
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
                type="email"
                placeholder='Correo electronico'
                id='email'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.email?.message}</p>
              )}

              <Input 
                type="password"
                placeholder='Contraseña'
                id='password'
                {...register('password')}
              />
              {errors.password?.message && (
                <p className='text-red-500 font-semibold ml-2'>{errors.password?.message}</p>
              )}
            </div>

            <button 
              type="submit"
              className='mt-10 bg-azul px-6 py-2.5 text-base text-blanco 
              font-bold border-2 border-solid border-azul rounded-[20px]'
            >
              Ingresar
            </button>

            <MessageLink 
              message='¿Aún no tienes una cuenta?'
              to='/auth/register'
              name='Registrate'
            />
          </Form>
        </FormContainer>
      </Main>
    </>
  )
};

export default LoginPage;