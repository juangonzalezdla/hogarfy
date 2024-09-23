import { useUser } from '../../contexts/UserContext';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from 'flowbite-react';

export default function NavLinks() {
  const { getUser, userData } = useUser();
  const params = useParams();

  useEffect(() => {
    getUser(params.id);
  }, []);

  const links = [
    {
      name: 'Cambiar datos',
      href: `/account/${userData?._id}/my-account`,
      color: 'purple',
    },
    {
      name: 'Cambiar email',
      href: `/account/${userData?._id}/update-email`,
      color: 'success',
    },
    {
      name: 'Cambiar contraseña',
      href: `/account/${userData?._id}/update-password`,
      color: 'success',
    },
    {
      name: 'Eliminar cuenta',
      href: `/account/${userData?._id}/delete-account`,
      color: 'failure',
    },
  ];

  return (
    <>
      <figure className='flex flex-col justify-center items-center'>
        <i className='bx bxs-user text-7xl bg-light-gray text-dark-gray p-5 rounded-full'></i>
      </figure>

      <div className='flex flex-col justify-center items-center gap-3 my-8 text-dark-gray text-center font-bold text-sm'>
        <p>{`${userData?.names} ${userData?.lastNames}`}</p>
        <p>{userData?.email}</p>
      </div>

      <div className='flex flex-col gap-3'>
        {links.map((link) => (
          <Link to={link.href}>
            <Button className='w-full' color={link.color}>
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
