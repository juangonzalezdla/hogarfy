import BasicHeader from '../../components/BasicHeader';
import Form from '../components/Form';
import FormTitle from '../components/FormTitle';
import { Input } from '../components/Input';
import MessageLink from '../components/MessageLink';
import SuccessMessage from '../components/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage';

export default function LogInPage() {
  return (
    <>
      <BasicHeader />
      <main className='w-full h-full px-3 my-12 flex justify-center items-center'>
        <Form>
          <FormTitle title='Iniciar sesión' />

          <div className='w-full flex flex-col'>
            <Input type='email' placeholder='Correo electrónico' />

            <Input type='password' placeholder='Contraseña' />
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
      </main>
    </>
  );
}
