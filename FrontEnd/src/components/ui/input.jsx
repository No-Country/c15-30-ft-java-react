import * as React from "react";
import { cn } from "@/lib/utils";
import { FaSearch, FaSortDown, FaSortUp } from "react-icons/fa";
import { textBold } from "@/styles/fonts";

const baseStyle =
  "";

const Input = React.forwardRef(({ className, type, tipo, ...props }, ref) => {
  if (tipo === "default") {
    return (
      <div className="">
        <div className={cn(baseStyle, textBold.className, "", className)}>
          <input
            placeholder="Place Holder"
            className="h-[52px] w-full rounded-lg border border-black p-2 text-primary"
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }

  if (tipo === "doble") {
    return (
      <div className="mx-auto max-w-md mt-10 w-[300px] md:max-w-[500px] flex justify-between gap-6">
        <div
          className={cn(
            baseStyle,
            "h-[52px] w-full flex justify-center",
            className
          )}
        >
          <input type="text" placeholder="Place Holder" {...props} />
        </div>
        <div className="h-[52px] w-full flex justify-center">
          <input type="text" placeholder="Place Holder" {...props} />
        </div>
      </div>
    );
  }

  if (tipo === "busqueda") {
    return (
      <div className="mx-auto max-w-md w-[300px] md:w-[500px]">
        <div className="h-[54px] w-full flex justify-center relative">
          <input
            type="text"
            className={cn(
              textBold.className,
              "w-full h-[50px] rounded-xl shadow-md p-2 text-primary"
            )}
            {...props}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        </div>
      </div>
    );
  }

  if (tipo === "ordenar") {
    return (
      <div className="mx-auto max-w-md mt-10 w-[95px] md:max-w-screen-sm">
        <div className="h-[52px] w-full flex justify-center relative">
          <input
            type="text"
            placeholder="Ordenar"
            className="h-[52px]"
            {...props}
          />
          <div className="h-full flex flex-col justify-center absolute right-1">
            <FaSortUp className="text-gray-400 cursor-pointer mt-3" />
            <FaSortDown className="text-gray-400 cursor-pointer mb-3" />
          </div>
        </div>
      </div>
    );
  }

  return null; // Manejar casos desconocidos o inesperados
});

Input.displayName = "Input";

export { Input };
