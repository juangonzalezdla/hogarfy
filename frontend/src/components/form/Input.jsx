import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full mt-5 text-azul font-medium placeholder-azul py-2.5 px-4 
      rounded-3xl border-2 border-solid border-blanco focus:outline-none 
      focus:border-2 focus:border-solid focus:border-azul"
    />
  );
});