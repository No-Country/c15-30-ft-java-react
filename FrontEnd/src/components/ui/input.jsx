import * as React from "react";
import { cn } from "@/lib/utils";
import { FaSearch, FaSortDown, FaSortUp } from "react-icons/fa";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input as InputShad }

/**
 * 
 * @props default: hay un solo input  
 * @props doble: hay dos inputs
 * @props busqueda: input con logo de busqueda
 * @props ordenar: input para ordenar
 * 
 * @example <Inputs tipo="default" />
 */
export const Inputs  = (props) => {
  const { tipo } = props
  if (tipo === "default") {
    return (
      <div className="">
        <div className="w-full flex justify-center">
          <Input placeholder="Place Holder" className={'h-[52px] border-2 border-black'} {...props} />
        </div>
      </div>
    );
  }

  if (tipo === "doble") {
    return (
      <div className="mx-auto max-w-md mt-10 w-[300px] md:max-w-[500px] flex justify-between gap-6">
        <div className="h-[52px] w-full flex justify-center">
          <Input type="text" placeholder="Place Holder" {...props} />
        </div>
        <div className="h-[52px] w-full flex justify-center">
          <Input type="text" placeholder="Place Holder" {...props} />
        </div>
      </div>
    );
  }

  if (tipo === "busqueda") {
    return (
      <div className="mx-auto max-w-md mt-10 w-[200px] md:w-[500px]">
        <div className="h-[52px] w-full flex justify-center relative">
          <Input type="text" placeholder="Place Holder" {...props} />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        </div>
      </div>
    );
  }

  if (tipo === "ordenar") {
    return (
      <div className="mx-auto max-w-md mt-10 w-[95px] md:max-w-screen-sm">
        <div className="h-[52px] w-full flex justify-center relative">
          <Input type="text" placeholder="Ordenar" className="h-[52px]" {...props} />
          <div className="h-full flex flex-col justify-center absolute right-1">
            <FaSortUp className="text-gray-400 cursor-pointer mt-3" />
            <FaSortDown className="text-gray-400 cursor-pointer mb-3" />
          </div>
        </div>
      </div>
    );
  }

  return null; // Manejar casos desconocidos o inesperados
};
