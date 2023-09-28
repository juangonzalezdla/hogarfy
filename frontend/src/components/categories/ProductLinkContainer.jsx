function ProductLinkContainer({ children }) {
  return (
    <div className='bg-blanco hidden absolute min-w-[160px] shadow-lg z-10 group-hover:block rounded-b-md py-2'>
      {children}
    </div>
  )
};

export default ProductLinkContainer;