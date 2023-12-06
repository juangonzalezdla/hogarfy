import BasicHeader from "../../components/BasicHeader.jsx";
import { Button } from "flowbite-react";

import { useUser } from "../../context/UserContext.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AccountLayout({ children }) {
  const { getUser, userData } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BasicHeader />
      <main className="w-full max-w-[1400px] my-0 mx-auto py-12 px-12 flex flex-col justify-center items-center max-[678px]:px-4">
        <div className="max-w-[1000px]">
          <div className="mb-5">
            <Link
              to="/"
              className="w-40 bg-gris-claro flex justify-center items-center gap-1 text-base text-gris-oscuro font-medium p-2 rounded-lg"
            >
              <i className="bx bx-arrow-back text-2xl"></i>
              Volver al inicio
            </Link>

            <h1 className="font-bold text-azul text-3xl mt-5">Editar perfil</h1>
          </div>

          <div className="w-full flex justify-center gap-10 max-md:flex-col">
            <section className="max-w-[300px] p-5 rounded-lg border border-solid border-gris-oscuro">
              <figure className="flex flex-col justify-center items-center mb-10">
                <i className="bx bxs-user bg-gris-claro text-gris-oscuro text-[120px] p-5 rounded-full"></i>

                <p className="text-gris-oscuro font-bold text-base">
                  {`Hola, ${userData?.name} ${userData?.lastName}`}
                </p>
                <p className="text-gris-oscuro font-bold text-base mt-3">
                  {userData?.email}
                </p>
              </figure>

              <div className="flex flex-col gap-3">
                <Link to={`/u/account/${userData?._id}`}>
                  <Button color="blue">Cambiar datos</Button>
                </Link>
                <Link to={`/u/account/update-email/${userData?._id}`}>
                  <Button>Cambiar email</Button>
                </Link>
                <Link to={`/u/account/update-password/${userData?._id}`}>
                  <Button>Cambiar contraseña</Button>
                </Link>
                <Link to={`/u/account/delete/${userData?._id}`}>
                  <Button color="failure">Eliminar cuenta</Button>
                </Link>
              </div>
            </section>

            <section className="max-w-[600px] p-5 rounded-lg border border-solid border-gris-oscuro">
              {children}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default AccountLayout;