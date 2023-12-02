import { Button, Label, TextInput } from "flowbite-react";
import SuccessMessage from "../../components/form/SuccessMessage.jsx";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";
import AccountLayout from "./AccountLayout.jsx";

import { useUser } from "../../context/UserContext.jsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateEmailSchema } from "../../schemas/user.js";

function UpdateEmail() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdateEmailSchema),
  });

  const { getUser, updateUserEmail, successMessage, errorsMessage } = useUser();

  const params = useParams();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue("email", user.email);
      }
    };
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await updateUserEmail(data);
    setValue("password", "");
    getUser();
  };

  return (
    <AccountLayout>
      <h2 className="font-bold text-azul text-xl mb-5">Cambiar email</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errorsMessage.map((error, i) => (
          <ErrorMessage message={error} key={i} />
        ))}
        {successMessage.map((success, i) => (
          <SuccessMessage message={success} key={i} />
        ))}

        <div className="w-full flex justify-start items-center flex-wrap gap-5">
          <div className="w-[260px]">
            <Label htmlFor="email" value="Nuevo email" className="mb-2 block" />
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

          <div className="w-[260px]">
            <Label htmlFor="password" value="Contraseña" className="mb-2 block" />
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

        <Button className="mt-5" type="submit">
          Actualizar email
        </Button>
      </form>
    </AccountLayout>
  );
}

export default UpdateEmail;