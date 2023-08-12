function Form({ children }) {
  return (
    <form className='w-full bg-azul-palido flex flex-col justify-center 
      items-center'>
      {children}
    </form>
  )
}

export default Form;