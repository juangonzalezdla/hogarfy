function BasicHeader({ children }) {
  return (
    <header className="bg-azul py-0 px-12 max-[678px]:px-4">
      <nav className="w-full max-w-[1400px] my-o mx-auto h-20 flex justify-between items-center">
        <figure>
          <a
            href="/"
            className="text-blanco font-poppins text-2xl font-bold no-underline"
          >
            Hogarfy
            {children}
          </a>
        </figure>
      </nav>
    </header>
  );
}

export default BasicHeader;