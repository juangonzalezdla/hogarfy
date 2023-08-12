import { Input } from '../components/Input';
import BasicHeader from '../components/BasicHeader';
import Main from '../components/Main';
import FormContainer from '../components/FormContainer';
import FormTitle from '../components/FormTitle';
import Form from '../components/Form';
import MessageLink from '../components/MessageLink';

function RegisterPage() {
  return (
    <>
      <BasicHeader />

      <Main>
        <FormContainer>
          <FormTitle title='Registrate' />

          <Form> 
            <Input 
              type="text"
              placeholder='Ingresa tú cedula'
            />

            <Input 
              type="text"
              placeholder='Nombres'
            />

            <Input 
              type="text"
              placeholder='Apellidos'
            />

            <Input 
              type="text"
              placeholder='Direccion - Ciudad'
            />

            <Input 
              type="text"
              placeholder='Número de celular'
            />  

            <Input 
              type="email"
              placeholder='Correo electronico'
            />

            <Input 
              type="tpassword"
              placeholder='Contraseña'
            />

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