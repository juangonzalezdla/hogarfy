export default function SuccessMessage({ message }) {
  return (
    <p className='w-full my-2 bg-green-100 border border-green-400 text-green-700 p-2 font-semibold rounded'>
      {message}
    </p>
  );
}
