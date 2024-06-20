export default function Form({ children, onSubmit }) {
  return (
    <div className='w-full max-w-md bg-light-blue p-6 rounded-2xl'>
      <form
        className='w-full flex flex-col justify-center items-center'
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}
