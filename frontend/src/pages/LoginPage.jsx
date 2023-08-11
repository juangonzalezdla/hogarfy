import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <header className="bg-azul py-[0] px-[3rem]">
        <nav className="w-[100%] max-w-[1400px] my-[o] mx-[auto] h-[80px] 
          flex flex-row justify-between items-center">
          <figure>
            <a className="text-blanco font-poppins text-[1.8rem] 
            font-bold no-underline" href="/">Hogarfy</a>
          </figure>
        </nav>
      </header>

      <main className='w-[100vw] h-[calc(100vh-100px)] flex flex-col justify-center items-center'>
        <div className='w-[400px] bg-azul-palido px-[2.5rem] py-[2.5rem] flex flex-col justify-center items-center rounded-[20px]'>
          <h1 className='text-[1.6rem] text-azul font-bold mb-[2rem]'>Iniciar sesión</h1>

          <form 
            className='w-full bg-azul-palido flex flex-col justify-center items-center'
          >       

            <input
              type="email"
              placeholder='Correo electronico'
              className='w-full mt-[20px] text-azul font-medium placeholder-azul 
              py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
              focus:outline-none focus:border-2 focus:border-solid focus:border-azul' 
            />

            <input 
              type="password"
              placeholder='Contraseña'
              className='w-full mt-[20px] text-azul font-medium placeholder-azul 
              py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
              focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
            />

            <button 
              type="submit"
              className='mt-[40px] bg-azul px-[25px] py-[10px] text-base text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
            >
              Ingresar
            </button>
            
            <p className='mt-[20px] flex gap-2'>
              ¿Aún no tienes una cuenta? 
              <Link to='/register' className='text-azul hover:underline'>
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}

export default LoginPage;