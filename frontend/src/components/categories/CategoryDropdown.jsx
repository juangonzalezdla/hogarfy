import ProductLinkContainer from './ProductLinkContainer.jsx';
import ProductLink from './ProductLink.jsx';

function CategoryDropdown() {
  return (
    <>
      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Tecnología
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Computadores' />
          <ProductLink link='/' name='Celulares' />
          <ProductLink link='/' name='Televisores' />
          <ProductLink link='/' name='Impresoras' />
          <ProductLink link='/' name='Monitores' />
          <ProductLink link='/' name='Consolas y videojuegos' />
          <ProductLink link='/' name='Cámaras' />
          <ProductLink link='/' name='Perifericos y accesorios' />
        </ProductLinkContainer>
      </div>

      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Electrodomesticos
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Neveras' />
          <ProductLink link='/' name='Lavadoras' />
          <ProductLink link='/' name='Aires acondicionados' />
          <ProductLink link='/' name='Licuadoras' />
          <ProductLink link='/' name='Monitores' />
          <ProductLink link='/' name='Microhondas' />
          <ProductLink link='/' name='Airfryers' />
          <ProductLink link='/' name='Hidrolavadoras' />
        </ProductLinkContainer>
      </div>

      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Hogar
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Muebles y sofas' />
          <ProductLink link='/' name='Comedores' />
          <ProductLink link='/' name='Camas y colchones' />
          <ProductLink link='/' name='Cocinas integrales' />
          <ProductLink link='/' name='Sillas y escritorios' />
          <ProductLink link='/' name='Repisas y encimeras' />
          <ProductLink link='/' name='Materas y jardineras' />
          <ProductLink link='/' name='Escobas y traperos' />
          <ProductLink link='/' name='Utensilios de cocina' />
          <ProductLink link='/' name='Kits de herramientas' />
        </ProductLinkContainer>
      </div>

      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Niños
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Cuadernos de dibujo' />
          <ProductLink link='/' name='Colores y crayones' />
          <ProductLink link='/' name='Juego de roles' />
          <ProductLink link='/' name='Monopoly' />
          <ProductLink link='/' name='Muñecos' />
          <ProductLink link='/' name='Barbies' />
          <ProductLink link='/' name='Hotweels' />
          <ProductLink link='/' name='Rompe cabezas' />
          <ProductLink link='/' name='Cartas' />
          <ProductLink link='/' name='Dominó' />
        </ProductLinkContainer>
      </div>

      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Libros
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Preescolar' />
          <ProductLink link='/' name='Primaria' />
          <ProductLink link='/' name='Secundaria' />
          <ProductLink link='/' name='Cuentos' />
          <ProductLink link='/' name='Poesía y novelas' />
          <ProductLink link='/' name='Ciencia ficcion' />
          <ProductLink link='/' name='Literatura Hispanoamericana' />
          <ProductLink link='/' name='Filosofia' />
          <ProductLink link='/' name='Geografia' />
          <ProductLink link='/' name='Naturales y Quimica' />
          <ProductLink link='/' name='Matematicas' />
          <ProductLink link='/' name='Religiones' />
        </ProductLinkContainer>
      </div>

      <div className='group'>
        <button className='bg-blanco text-azul text-lg font-roboto border-none 
          font-bold outline-none p-2.5 flex justify-center items-center
          group-hover:bg-gris-claro'>
          Deportes
          <i className='bx bx-chevron-down'></i>
        </button>
        <ProductLinkContainer>
          <ProductLink link='/' name='Bicicletas' />
          <ProductLink link='/' name='Raquetas - Tenis' />
          <ProductLink link='/' name='Cuerdas' />
          <ProductLink link='/' name='Balones de fútbol' />
          <ProductLink link='/' name='Barras' />
          <ProductLink link='/' name='Mancuernas' />
          <ProductLink link='/' name='Zapatos deportivos' />
          <ProductLink link='/' name='Bolsos y tulas' />
          <ProductLink link='/' name='Termos' />
          <ProductLink link='/' name='Protección' />
        </ProductLinkContainer>
      </div>
    </>
  )
};

export default CategoryDropdown;