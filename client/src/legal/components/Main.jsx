export default function Main({ children }) {
  return (
    <main className='w-full max-w-[1400px] my-0 mx-auto p-12 flex flex-col justify-center items-center'>
      <div className='max-w-[900px] font-roboto text-black'>{children}</div>
    </main>
  );
}
