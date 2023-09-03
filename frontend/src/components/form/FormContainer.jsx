function FormContainer({ children }) {
  return (
    <div className='w-[400px] bg-azul-palido p-6 flex flex-col justify-center 
      items-center rounded-2xl'>
      {children}
    </div>
  )
};

export default FormContainer;