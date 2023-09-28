function FeaturesCard({ children, name, description }) {
  return (
    <div className='w-60 bg-blanco py-4 px-3 flex flex-col items-center
      rounded-lg shadow-lg transition-all duration-300 ease-in-out group hover:bg-azul'>
      {children}
      <h2 className='text-negro font-bold text-xl mt-1 group-hover:text-blanco'>
        {name}
      </h2>
      <p className='text-center group-hover:text-blanco'>
        {description}
      </p>
    </div>
  )
};

export default FeaturesCard;