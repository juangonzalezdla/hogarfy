function FormContainer({ children }) {
  return (
    <div className='w-[400px] bg-azul-palido px-8 py-8 flex flex-col 
      justify-center items-center rounded-[20px]'>
      {children}
    </div>
  )
};

export default FormContainer;