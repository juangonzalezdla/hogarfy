import { Button, Modal, Label, TextInput } from "flowbite-react";
import SuccessMessage from "../../components/form/SuccessMessage.jsx";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";

import { useUser } from "../../context/UserContext.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdatePasswordSchema } from "../../schemas/user.js";

function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdatePasswordSchema),
  });

  const { getUser, updateUserPasword, successMessage, errorsMessage } = useUser();

  const onSubmit = async (data) => await updateUserPasword(data);

  const [openModal, setOpenModal] = useState();

  return (
    <>
      <Button className="mb-3" onClick={() => setOpenModal("form-elements")}>
        Cambiar contraseña
      </Button>

      <Modal
        size="md"
        show={openModal === "form-elements"}
        onClose={() => setOpenModal()}
      >
        <Modal.Header>Actualizar contraseña</Modal.Header>
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
                htmlFor="oldPassword"
                value="Contraseña actual"
                className="mb-2 block"
              />
              <TextInput
                id="oldPassword"
                placeholder="Contraseña"
                type="password"
                {...register("oldPassword")}
              />
              {errors.oldPassword?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.oldPassword?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Label
                htmlFor="newPassword"
                value="Contraseña nueva"
                className="mb-2 block"
              />
              <TextInput
                id="newPassword"
                placeholder="Contraseña"
                type="password"
                {...register("newPassword")}
              />
              {errors.newPassword?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.newPassword?.message}
                </p>
              )}
            </div>

            <Button className="mt-6" type="submit">
              Actualizar contraseña
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdatePassword;