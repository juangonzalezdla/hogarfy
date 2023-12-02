import { Button, Label, TextInput } from "flowbite-react";
import SuccessMessage from "../../components/form/SuccessMessage.jsx";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";
import AccountLayout from "./AccountLayout.jsx";

import { useUser } from "../../context/UserContext.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdatePasswordSchema } from "../../schemas/user.js";

function UpdatePassword() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdatePasswordSchema),
  });

  const { updateUserPassword, successMessage, errorsMessage } = useUser();

  const onSubmit = async (data) => {
    await updateUserPassword(data);
    setValue("oldPassword", "");
    setValue("newPassword", "");
  }

  return (
    <AccountLayout>
      <h2 className="font-bold text-azul text-xl mb-5">Cambiar contraseña</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errorsMessage.map((error, i) => (
          <ErrorMessage message={error} key={i} />
        ))}
        {successMessage.map((success, i) => (
          <SuccessMessage message={success} key={i} />
        ))}

        <div className="w-full flex justify-start items-center flex-wrap gap-5">
          <div className="w-[260px]">
            <Label htmlFor="oldPassword" value="Contraseña actual" className="mb-2 block" />
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

          <div className="w-[260px]">
            <Label htmlFor="newPassword" value="Contraseña nueva" className="mb-2 block"/>
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
        </div>

        <Button className="mt-5" type="submit">
          Actualizar contraseña
        </Button>
      </form>
    </AccountLayout>
  );
}

export default UpdatePassword;