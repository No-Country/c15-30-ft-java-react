import React from "react";
{/* eslint-disable */}

/**
 * =======================
 *   ImageContainer
 * =======================
 * @props {string} size - Tamaño del contenedor de imagen. Las opciones son:
 *   - sm: Pequeño (w-content, h-[328px], mt-[21px])
 *   - md: Mediano (w-content, h-[345px], mt-[21px])
 *   - lg: Grande (w-content, h-[345px] md:h-full, mt-[21px])
 * **************************************************************
 * 
 * @example
 * import ImageContainer from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <ImageContainer size="md" image="URL_de_la_imagen" className="clase_adicional" />
 *   );
 * };
 */
const ImageContainer = ({ size, image, className }) => {

  if ((size === "sm"))
    return (
      <div className={`w-content  h-[328px] mt-[21px]`}>
        <img src={image} alt="" className={className} />
      </div>
    );
  if ((size === "md"))
    return (
      <div className="w-content h-[345px] mt-[21px]">
        <img src={image} alt="" className={className} />
      </div>
    );
  if ((size === "lg"))
    return (
      <div className="w-content h-[345px] md:h-full mt-[21px]">
        <img src={image} alt=""  width={1000} height={800} className={className} />
      </div>
    );
};

export default ImageContainer;
