export default function ErrorMessage({ message }) {
  return (
    <p className='w-full my-2 bg-red-100 border border-red-400 text-red-700 p-2 font-semibold rounded'>
      {message}
    </p>
  );
}
