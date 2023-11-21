function Form({ children, onSubmit }) {
  return (
    <form
      className="w-full bg-azul-palido flex flex-col justify-center items-center"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;