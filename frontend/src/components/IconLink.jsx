import { Link } from "react-router-dom";

function IconLink({ to, children }) {
  return (
    <Link
      to={to}
      className="flex flex-col justify-center items-center text-blanco hover:text-gris-oscuro group"
    >
      {children}
    </Link>
  );
}

export default IconLink;