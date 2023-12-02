import { Button, Label, TextInput } from "flowbite-react";
import SuccessMessage from "../../components/form/SuccessMessage.jsx";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";
import AccountLayout from "./AccountLayout.jsx";

import { useUser } from "../../context/UserContext.jsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateDataSchema } from "../../schemas/user.js";

function AccountPage() {
  useEffect(() => {
    document.title = "Mi cuenta | Hogarfy";
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdateDataSchema),
  });

  const { getUser, updateUserData, successMessage, errorsMessage } = useUser();

  const params = useParams();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue("cedula", user.cedula);
        setValue("email", user.email);
        setValue("name", user.name);
        setValue("lastName", user.lastName);
        setValue("address", user.address);
        setValue("phone", user.phone);
      }
    };
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await updateUserData(data);
    getUser();
  }

  return (
    <AccountLayout>
      <h2 className="font-bold text-azul text-xl mb-5">Tus datos</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errorsMessage.map((error, i) => (
          <ErrorMessage message={error} key={i} />
        ))}
        {successMessage.map((success, i) => (
          <SuccessMessage message={success} key={i} />
        ))}

        <div className="w-full flex justify-start items-center flex-wrap gap-5">
          <div className="w-[260px]">
            <Label htmlFor="cedula" value="Cedula" className="mb-2 block" />
            <TextInput
              id="cedula"
              type="text"
              disabled
              {...register("cedula")}
            />
          </div>

          <div className="w-[260px]">
            <Label htmlFor="email" value="Correo electronico" className="mb-2 block" />
            <TextInput 
              id="email" 
              type="text" 
              disabled 
              {...register("email")} 
            />
          </div>

          <div className="w-[260px]">
            <Label htmlFor="name" value="Nombres" className="mb-2 block" />
            <TextInput 
              id="name" 
              type="text" 
              {...register("name")} 
            />
            {errors.name?.message && (
              <p className="text-red-500 font-semibold">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="w-[260px]">
            <Label htmlFor="lastName" value="Apellidos" className="mb-2 block" />
            <TextInput 
              id="lastName" 
              type="text" 
              {...register("lastName")} 
            />
            {errors.lastName?.message && (
              <p className="text-red-500 font-semibold">
                {errors.lastName?.message}
              </p>
            )}
          </div>

          <div className="w-[260px]">
            <Label htmlFor="address" value="Dirección" className="mb-2 block" />
            <TextInput 
              id="address" 
              type="text" 
              {...register("address")} 
            />
            {errors.address?.message && (
              <p className="text-red-500 font-semibold">
                {errors.address?.message}
              </p>
            )}
          </div>

          <div className="w-[260px]">
            <Label htmlFor="phone" value="Número de telefono" className="mb-2 block" />
            <TextInput 
              id="phone" 
              type="text" 
              {...register("phone")} 
            />
            {errors.phone?.message && (
              <p className="text-red-500 font-semibold">
                {errors.phone?.message}
              </p>
            )}
          </div>
        </div>

        <Button className="mt-5" type="submit" color="blue">
          Actualizar datos
        </Button>
      </form>
    </AccountLayout>
  );
}

export default AccountPage;