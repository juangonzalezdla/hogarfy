export default function Main({ children }) {
  return (
    <main className='w-full max-w-[1400px] my-0 mx-auto p-12 flex flex-col justify-center items-center max-md:px-4'>
      <div className='max-w-4xl font-roboto text-black'>{children}</div>
    </main>
  );
}
