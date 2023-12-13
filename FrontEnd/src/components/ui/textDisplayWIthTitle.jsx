import React from "react";
import { cn } from "../../lib/utils";
import { textBold } from "../../styles/fonts.js";

const variants = {
  primary: "text-primary",
  regular: "text-black",
};

/**
 * =======================
 * TextDisplayWithTitle
 * =======================
 * @props {string} type - Tipo de disposición del texto. Las opciones son:
 *   - vertical: Muestra el título y el contenido de forma vertical.
 *   - sin valor: Muestra el título y el contenido de forma horizontal.
 * @props {string} variant - Variante de estilo del texto. Las opciones son:
 *   - primary: Estilo primario (texto primario).
 *   - regular: Estilo regular (texto negro).
 *   - sin valor: Estilo primario (texto primario).
 * @props {Object} content - Contenido del componente, con propiedades:
 *   - title: Título del texto.
 *   - data: Contenido del texto.
 * **************************************************************
 * 
 * @example
 * import TextDisplayWithTitle from './Ruta';
 *
 * // Muestra el título y el contenido de forma vertical con estilo primario
 * const VerticalTextDisplay = () => {
 *   return (
 *     <TextDisplayWithTitle
 *       type="vertical"
 *       variant="primary"
 *       content={{
 *         title: "Título",
 *         data: "Contenido del texto aquí...",
 *       }}
 *     />
 *   );
 * };
 *
 * // Muestra el título y el contenido de forma horizontal con estilo regular
 * const HorizontalTextDisplay = () => {
 *   return (
 *     <TextDisplayWithTitle
 *       content={{
 *         title: "Título",
 *         data: "Contenido del texto aquí...",
 *       }}
 *     />
 *   );
 * };
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
