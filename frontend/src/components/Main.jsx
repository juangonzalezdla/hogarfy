function Main({ children }) {
  return (
    <main className='w-[100vw] h-[calc(100vh-100px)] flex flex-col justify-center 
      items-center'>
      {children}  
    </main>
  )
};

export default Main;