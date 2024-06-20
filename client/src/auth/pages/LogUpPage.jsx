import BasicHeader from '../../components/BasicHeader';
import Form from '../components/Form';
import FormTitle from '../components/FormTitle';
import { Input } from '../components/Input';
import MessageLink from '../components/MessageLink';
import SuccessMessage from '../components/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage';

export default function LogUpPage() {
  return (
    <>
      <BasicHeader />
      <main className='w-full h-full px-3 my-12 flex justify-center items-center'>
        <Form>
          <FormTitle title='Registrate' />
          <div className='w-full flex flex-col'>
            <Input type='text' placeholder='Nombres' />

            <Input type='text' placeholder='Apellidos' />

            <Input type='number' placeholder='Cédula' />

            <Input type='number' placeholder='Número de teléfono' />

            <Input type='text' placeholder='Ciudad / Departamento' />

            <Input type='text' placeholder='Dirección' />

            <Input type='email' placeholder='Correo electrónico' />

            <Input type='password' placeholder='Contraseña' />
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
      </main>
    </>
  );
}
