export default function ProductGrid({ children }) {
  return (
    <section className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {children}
    </section>
  );
}
