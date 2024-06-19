export default function BasicHeader() {
  return (
    <header className='bg-blue py-0 px-12 max-md:px-4'>
      <nav className='w-full max-w-[1400px] my-o mx-auto h-16 flex justify-between items-center'>
        <figure>
          <a
            href='/'
            className='text-white font-poppins text-2xl font-bold no-underline'
          >
            Hogarfy
          </a>
        </figure>
      </nav>
    </header>
  );
}
