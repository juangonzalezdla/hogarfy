function FormContainer({ children }) {
  return (
    <div className="w-full max-w-[400px] my-o mx-auto bg-azul-palido p-6 flex flex-col justify-center items-center rounded-2xl">
      {children}
    </div>
  );
}

export default FormContainer;