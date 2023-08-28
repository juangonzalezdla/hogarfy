import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  return (
    <input 
      {...props}
      ref={ref}
      className="w-full mt-5 text-azul font-medium placeholder-azul 
      py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
      focus:outline-none focus:border-2 focus:border-solid focus:border-azul"
    />
  )
});