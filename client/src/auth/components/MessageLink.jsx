export default function MessageLink({ message, to, name }) {
  return (
    <>
      <p className='mt-5 flex gap-2'>
        {message}
        <Link to={to} className='text-blue hover:underline'>
          {name}
        </Link>
      </p>
    </>
  );
}
