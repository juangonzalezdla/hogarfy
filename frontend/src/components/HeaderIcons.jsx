import IconLink from "./IconLink.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderIcons() {
  const { isAuthenticated, logout } = useAuth();
  const { getUser, userData } = useUser();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getUser(); 
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex flex-row items-center gap-1">
        {isAuthenticated ? (
          <>
            <div
              onClick={handleClick}
              className="text-blanco cursor-pointer flex justify-center items-center"
            >
              <i className="bx bx-user text-3xl font-medium rounded-full"></i>
              {show === false ? (
                <>
                  <i className="bx bx-chevron-down text-2xl"></i>
                </>
              ) : (
                <>
                  <i className="bx bx-chevron-up text-2xl"></i>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <IconLink to="/auth/login">
              <i className="bx bx-user text-3xl leading-none font-medium group-hover:text-blanco"></i>
              <span className="group-hover:underline group-hover:text-blanco text-xs">
                Ingresar
              </span>
            </IconLink>
          </>
        )}

        <IconLink to="/orders">
          <i className="bx bx-package text-3xl font-medium py-1 px-2 hover:bg-gris-claro rounded-full"></i>
        </IconLink>

        <IconLink to="/cart">
          <i className="bx bx-cart text-3xl font-medium py-1 px-2 hover:bg-gris-claro rounded-full"></i>
        </IconLink>
      </div>

      {show && (
        <div className="absolute top-[88px] right-24 bg-blanco w-48 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-20">
          <span className="font-roboto text-oscuro text-base font-bold">
            ¡Hola, {userData?.name}!
          </span>

          <Link
            to={`/u/account/${userData._id}`}
            className="flex justify-center items-center gap-2 text-lg text-gris-oscuro font-medium p-2 rounded-lg hover:bg-gris-claro"
          >
            <i className="bx bx-cog text-2xl"></i>
            Mi cuenta
          </Link>
          <hr />
          <Link
            to="/auth/login"
            onClick={() => {
              logout();
            }}
            className="flex justify-center items-center gap-2 text-lg text-red-700 font-semibold p-2 rounded-lg hover:bg-red-100"
          >
            <i className="bx bx-log-out text-red-700 text-2xl"></i>
            Cerrar sesión
          </Link>
        </div>
      )}
    </>
  );
}

export default HeaderIcons;