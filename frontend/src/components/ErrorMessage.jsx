function ErrorMessage({ message }) {
  return (
    <p className='w-[400px] mb-[10px] bg-red-100 border border-red-400
     text-red-700 px-2 py-1 rounded'>
      {message}
    </p>
  )
}

export default ErrorMessage;