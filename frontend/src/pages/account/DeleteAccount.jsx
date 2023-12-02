import { Button, Label, TextInput } from "flowbite-react";
import SuccessMessage from "../../components/form/SuccessMessage.jsx";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";
import AccountLayout from "./AccountLayout.jsx";

import { useUser } from "../../context/UserContext.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDeleteSchema } from "../../schemas/user.js";

function DeleteAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userDeleteSchema),
  });

  const { deleteUser, successMessage, errorsMessage } = useUser();

  const onSubmit = async (data) => await deleteUser(data);

  return (
    <AccountLayout>
      <h2 className="font-bold text-azul text-xl mb-5">Eliminar cuenta</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errorsMessage.map((error, i) => (
          <ErrorMessage message={error} key={i} />
        ))}
        {successMessage.map((success, i) => (
          <SuccessMessage message={success} key={i} />
        ))}

        <div className="w-full flex justify-start items-center flex-wrap gap-5">
          <div className="w-[260px]">
            <Label htmlFor="password" value="Contraseña" className="mb-2 block"
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
        </div>

        <Button className="mt-5" type="submit" color="failure">
          Eliminar cuenta
        </Button>
      </form>
    </AccountLayout>
  );
}

export default DeleteAccount;