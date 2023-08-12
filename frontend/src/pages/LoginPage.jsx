import { Input } from '../components/Input';
import BasicHeader from '../components/BasicHeader';
import Main from '../components/Main';
import FormContainer from '../components/FormContainer';
import FormTitle from '../components/FormTitle';
import Form from '../components/Form';
import MessageLink from '../components/MessageLink';

function LoginPage() {
  return (
    <>
      <BasicHeader />

      <Main>
        <FormContainer>
          <FormTitle title='Iniciar sesión' />

          <Form>       
            <Input 
              type="email"
              placeholder='Correo electronico'
            />

            <Input 
              type="password"
              placeholder='Contraseña'
            />

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
}

export default LoginPage;