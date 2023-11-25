import { Button, Modal, Label, TextInput } from "flowbite-react";
import SuccessMessage from '../../components/form/SuccessMessage.jsx';
import ErrorMessage from '../../components/form/ErrorMessage.jsx';

import { useUser } from "../../context/UserContext.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateEmailSchema } from "../../schemas/user.js";

function UpdateEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdateEmailSchema),
  });

  const { getUser, updateUserEmail, successMessage, errorsMessage } = useUser();

  const onSubmit = async (data) => await updateUserEmail(data);

  const [openModal, setOpenModal] = useState();

  return (
    <>
      <Button className="mb-3" onClick={() => setOpenModal("form-elements")}>
        Cambiar email
      </Button>

      <Modal
        size="md"
        show={openModal === "form-elements"}
        onClose={() => setOpenModal()}
      >
        <Modal.Header>Actualizar email</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errorsMessage.map((error, i) => (
              <ErrorMessage message={error} key={i} />
            ))}
            {successMessage.map((success, i) => (
              <SuccessMessage message={success} key={i} />
            ))}
            <div className="mb-5">
              <Label
                htmlFor="email"
                value="Nuevo email"
                className="mb-2 block"
              />
              <TextInput
                id="email"
                placeholder="name@example.com"
                type="email"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Label
                htmlFor="password"
                value="Contraseña"
                className="mb-2 block"
              />
              <TextInput
                id="password"
                placeholder="Contraseña"
                type="password"
                {...register("password")}
              />
              {errors.password?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Button className="mt-6" type="submit">
              Actualizar email
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateEmail;