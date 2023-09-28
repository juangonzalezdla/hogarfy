import BasicHeader from '../components/BasicHeader.jsx';
import { Button, Modal, Label, TextInput } from 'flowbite-react';
import SuccessMessage from '../components/form/SuccessMessage.jsx';
import ErrorMessage from '../components/form/ErrorMessage.jsx';

import { useUser } from '../context/UserContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  userUpdateDataSchema, 
  userUpdateEmailSchema, 
  userUpdatePasswordSchema,
  userDeleteSchema 
} from '../schemas/user.js';

function AccountPage() {
  useEffect(() => {
    document.title = 'Mi cuenta | Hogarfy';
  }, []);

  const { register: registerForm1, 
    handleSubmit: handleSubmitForm1, 
    formState: { errors: errorsForm1 }} = useForm({
    resolver: zodResolver(userUpdateEmailSchema)
  });
  const { register: registerForm2, 
    handleSubmit: handleSubmitForm2, 
    formState: { errors: errorsForm2 }} = useForm({
    resolver: zodResolver(userUpdatePasswordSchema)
  });
  const { register: registerForm3, 
    handleSubmit: handleSubmitForm3, setValue, 
    formState: { errors: errorsForm3 }} = useForm({
    resolver: zodResolver(userUpdateDataSchema)
  });
  const { register: registerForm4, 
    handleSubmit: handleSubmitForm4, 
    formState: { errors: errorsForm4}} = useForm({
    resolver: zodResolver(userDeleteSchema)
  });

  const { 
    getUser, 
    updateUserEmail,
    updateUserPassword,
    updateUserData,
    deleteUser, 
    successMessage, 
    errorsMessage
  } = useUser();

  const { user } = useAuth();
  const params = useParams();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue('cedula', user.cedula)
        setValue('email', user.email)
        setValue('name', user.name)
        setValue('lastName', user.lastName)
        setValue('address', user.address)
        setValue('phone', user.phone)
      }
    }
    loadUser();
  }, []);
  
  const onSubmit1 = async (data) => await updateUserEmail(data);
  const onSubmit2 = async (data) => await updateUserPassword(data);
  const onSubmit3 = async (data) => await updateUserData(data);
  const onSubmit4 = async (data) => await deleteUser(data);

  const [openModal, setOpenModal] = useState();
  const [openModal2, setOpenModal2] = useState();
  const [openModal3, setOpenModal3] = useState();
  
  return (
    <>
      <BasicHeader />
      <main className='w-full max-w-[1400px] my-0 mx-auto py-12 px-12 
        flex flex-col justify-center items-center max-[678px]:px-4'>
        <div className='max-w-[1000px]'>
          <div className='mb-5'>
            <Link
              to='/' 
              className='w-40 bg-gris-claro flex justify-center items-center gap-1 text-base text-gris-oscuro font-medium p-2 rounded-lg'
            >
              <i className='bx bx-arrow-back text-2xl'></i>
              Volver al inicio
            </Link>

            <h1 className='font-bold text-azul text-3xl mt-5'>Editar perfil</h1>
          </div>    

          <div className='w-full flex justify-center gap-10 max-md:flex-col'>
            <section className='max-w-[300px] p-5 rounded-lg border border-solid border-gris-oscuro'>
              <figure className='flex flex-col justify-center items-center mb-10'>
                <i className='bx bxs-user bg-gris-claro text-gris-oscuro text-[120px] p-5 rounded-full'></i>

                <p className='text-gris-oscuro font-bold text-base mt-3'>
                  {user.email}
                </p>
              </figure>

              <Button onClick={() => setOpenModal('form-elements')}
                className='mb-3' 
              >
                Cambiar email
              </Button>
              <Modal size='md' 
                show={openModal === 'form-elements'} 
                onClose={() => setOpenModal()}
              >
                <Modal.Header>Actualizar email</Modal.Header>
                <Modal.Body>
                  <form onSubmit={handleSubmitForm1(onSubmit1)}>
                    {
                      errorsMessage.map((error, i) => (
                        <ErrorMessage message={error} key={i} />
                      ))
                    }
                    {
                      successMessage.map((success, i) => (
                        <SuccessMessage message={success} key={i} />
                      ))
                    }
                    <div className='mb-5'>
                      <Label
                        htmlFor="email"
                        value="Nuevo email"
                        className="mb-2 block"
                      />
                      <TextInput
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        {...registerForm1('email')}
                      />
                      {errorsForm1.email?.message && (
                        <p className='text-red-500 font-semibold'>{errorsForm1.email?.message}</p>
                      )}
                    </div>

                    <div className='mb-5'>
                      <Label
                        htmlFor="password"
                        value="Contraseña"
                        className="mb-2 block"
                      />
                      <TextInput
                        id="password"
                        placeholder="Contraseña"
                        type="password"
                        {...registerForm1('password')}
                      />
                      {errorsForm1.password?.message && (
                        <p className='text-red-500 font-semibold'>{errorsForm1.password?.message}</p>
                      )}
                    </div>
                  
                    <Button 
                      className='mt-6'
                      type='submit'
                    >
                      Actualizar email
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>

              <Button onClick={() => setOpenModal2('form-elements')}
                className='mb-3'
              >
                Cambiar contraseña
              </Button>
              <Modal size='md' 
                show={openModal2 === 'form-elements'} 
                onClose={() => setOpenModal2()}
              >
                <Modal.Header>Actualizar contraseña</Modal.Header>
                <Modal.Body>
                  <form onSubmit={handleSubmitForm2(onSubmit2)}>
                    {
                      errorsMessage.map((error, i) => (
                        <ErrorMessage message={error} key={i} />
                      ))
                    }
                    {
                      successMessage.map((success, i) => (
                        <SuccessMessage message={success} key={i} />
                      ))
                    }
                    <div className='mb-5'>
                      <Label
                        htmlFor="oldPassword"
                        value="Contraseña actual"
                        className="mb-2 block"
                      />
                      <TextInput
                        id="oldPassword"
                        placeholder="Contraseña"
                        type="password"
                        {...registerForm2('oldPassword')}
                      />
                      {errorsForm2.oldPassword?.message && (
                        <p className='text-red-500 font-semibold'>{errorsForm2.oldPassword?.message}</p>
                      )}
                    </div>

                    <div className='mb-5'>
                      <Label
                        htmlFor="newPassword"
                        value="Contraseña nueva"
                        className="mb-2 block"
                      />
                      <TextInput
                        id="newPassword"
                        placeholder="Contraseña"
                        type="password"
                        {...registerForm2('newPassword')}
                      />
                      {errorsForm2.newPassword?.message && (
                        <p className='text-red-500 font-semibold'>{errorsForm2.newPassword?.message}</p>
                      )}
                    </div>

                    <Button
                      className='mt-6'
                      type='submit'
                    >
                      Actualizar contraseña
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>

              <Button onClick={() => setOpenModal3('form-elements')}
                color="failure"
              >
                Eliminar cuenta
              </Button>
            </section>

            <section className='max-w-[600px] p-5 rounded-lg border border-solid border-gris-oscuro'>
              <h2 className='font-bold text-azul text-xl mb-5'>Tus datos</h2>
              <form onSubmit={handleSubmitForm3(onSubmit3)}>
                {
                  errorsMessage.map((error, i) => (
                    <ErrorMessage message={error} key={i} />
                  ))
                }
                {
                  successMessage.map((success, i) => (
                    <SuccessMessage message={success} key={i} />
                  ))
                }
                <div className='w-full flex justify-start items-center flex-wrap gap-5'>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="cedula"
                      value="Cedula"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="cedula"
                      placeholder=''
                      type="text"
                      disabled
                      {...registerForm3('cedula')}
                    />
                  </div>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="email"
                      value="Correo electronico"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="email"
                      placeholder=''
                      type="text"
                      disabled
                      {...registerForm3('email')}
                    />
                  </div>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="name"
                      value="Nombres"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="name"
                      placeholder=""
                      type="text"
                      {...registerForm3('name')}
                    />
                    {errorsForm3.name?.message && (
                      <p className='text-red-500 font-semibold'>{errorsForm3.name?.message}</p>
                    )}
                  </div>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="lastName"
                      value="Apellidos"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="lastName"
                      placeholder=""
                      type="text"
                      {...registerForm3('lastName')}
                    />
                    {errorsForm3.lastName?.message && (
                      <p className='text-red-500 font-semibold'>{errorsForm3.lastName?.message}</p>
                    )}
                  </div>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="address"
                      value="Dirección"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="address"
                      placeholder=""
                      type="text"
                      {...registerForm3('address')}
                    />
                    {errorsForm3.address?.message && (
                      <p className='text-red-500 font-semibold'>{errorsForm3.address?.message}</p>
                    )}
                  </div>
                  <div className='w-[260px]'>
                    <Label
                      htmlFor="phone"
                      value="Número de telefono"
                      className="mb-2 block"
                    />
                    <TextInput
                      id="phone"
                      placeholder=""
                      type="text"
                      {...registerForm3('phone')}
                    />
                    {errorsForm3.phone?.message && (
                      <p className='text-red-500 font-semibold'>{errorsForm3.phone?.message}</p>
                    )}
                  </div>
                </div>
                <Button 
                  className='mt-10'
                  type='submit'
                  color='purple'
                >
                  Actualizar datos
                </Button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  )
};

export default AccountPage;