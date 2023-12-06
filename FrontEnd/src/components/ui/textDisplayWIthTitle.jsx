import React from "react";
import { cn } from "../../lib/utils";
import { textBold } from "../../styles/fonts.js";

const variants = {
  primary: "text-primary",
  regular: "text-black",
};

/**
 * Despliega un texto formateado con titulo
 * @prop {string} type recibe:
 * - vertical: devuelve un formato vertical
 * - sin valor: por defecto devuelve un formato horizontal
 * @prop {string} variant recibe:
 * - primary: devuelve el titulo con el color primario
 * - regular: devuelve el titulo con el color negro(default)
 * @prop {Object} content un objeto que contiene las propiedades title y data
 * @returns
 */
const TextDisplayWithTitle = ({ type, variant, content, ...props }) => {

  if (type === "vertical")
    return (
      <div className="flex flex-col gap-2 justify-between" {...props}>
        <h2 className={cn(textBold.className, variants[variant])}>
          {content.title}
        </h2>
        <p className={cn("text-gray-500 text-sm line-clamp-2")}>{content.data}</p>
      </div>
    );

  return (
    <div className="w-full flex justify-between" {...props}>
      <h2 className={cn(textBold.className, variants[variant])}>
        {content.title}
      </h2>
      <p className={cn("text-gray-500 text-sm line-clamp-2")}>{content.data}</p>
    </div>
  );
};

export default TextDisplayWithTitle;
