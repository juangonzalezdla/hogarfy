export default function Form({ children, onSubmit }) {
  return (
    <div className='w-full max-w-sm my-o mx-auto bg-light-blue p-6 flex flex-col justify-center items-center rounded-2xl'>
      <form
        className='w-full bg-light-blue flex flex-col justify-center items-center'
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}
