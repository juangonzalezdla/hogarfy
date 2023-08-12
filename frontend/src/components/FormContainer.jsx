function FormContainer({ children }) {
  return (
    <div className='w-[400px] bg-azul-palido px-10 py-10 flex flex-col 
      justify-center items-center rounded-[20px]'>
      {children}
    </div>
  )
}

export default FormContainer;