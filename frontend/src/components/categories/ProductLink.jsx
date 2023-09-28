function ProductLink({ link, name }) {
  return (
    <ul>
      <li>
        <a href={link}
          className='block font-roboto text-oscuro text-base p-2.5 no-underline font-bold text-left hover:bg-gris-claro'
        >
          {name}
        </a>
      </li>
    </ul>
  )
};

export default ProductLink;