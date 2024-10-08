export default function Container({ children }) {
  return (
    <main className='w-full max-w-[1400px] my-0 mx-auto p-12 flex flex-col justify-center items-center max-md:px-4'>
      {children}
    </main>
  );
}
