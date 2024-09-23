import Logo from './Logo';

export default function BasicHeader() {
  return (
    <header className='bg-blue py-0 px-12 max-md:px-4'>
      <nav className='w-full max-w-[1400px] my-o mx-auto h-16 flex justify-between items-center'>
        <Logo />
      </nav>
    </header>
  );
}
