function LegalContainer({ children }) {
  return (
    <main className='w-full max-w-[1400px] my-0 mx-auto py-12 px-12 flex flex-col justify-center items-center'>
      {children}
    </main>
  )
};

export default LegalContainer;