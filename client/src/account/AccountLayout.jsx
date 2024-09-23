import BasicHeader from '../ui/BasicHeader';
import Container from '../ui/Container'
import ButtonBack from '../ui/ButtonBack';
import NavLinks from '../ui/account/NavLinks';

export default function AccountLayout({ children }) {
  return (
    <>
      <BasicHeader />
      <Container>
        <div className='w-3/4'>
          <div className='mb-5'>
            <ButtonBack />

            <h1 className='font-bold text-blue text-3xl mt-10'>
              Editar cuenta
            </h1>
          </div>

          <div className='w-full grid grid-cols-3 gap-10 max-md:grid-cols-1'>
            <section className='w-full h-auto bg-light-blue p-5 rounded-lg shadow-lg'>
              <NavLinks />
            </section>

            <section className='w-full h-auto col-span-2 bg-light-blue p-5 rounded-lg shadow-lg max-md:col-auto'>
              {children}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
