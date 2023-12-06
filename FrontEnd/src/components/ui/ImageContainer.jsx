import React from 'react'

/**
 * =======================
 *  Contenedor de SVG
 * ========================
 * @component
 * 
 * Componente que proporciona un contenedor para imágenes SVG con diferentes tamaños.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.size - Tamaño del contenedor.
 *   - "sm" para pequeño.
 *   - "md" para mediano.
 *   - "lg" para grande.
 * 
 * @param {React.Component} component - un componente de react que contiene un SVG formateado.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el contenedor de la imagen SVG.
 * **************************************************************
 * 
 * @example
 * 
 * // Uso del componente SvgImageContainer en otro componente
 * import { ImageContainer } from './Ruta';
 * 
 * const MiComponente = () => {
 *   return (
 *     <SvgImageContainer 
 *       size="md" 
 *       component={imagen} // Reemplaza con el componente SVG
 *     />
 *   );
 * };
 */
const ImageContainer = ({size, component}) => {
if (size = "sm")   return (
  <div className={`w-content h-[328px] mt-[21px]`}>
    {component}
  </div>
)
if (size = "md")   return (
  <div className='w-content  h-[345px] mt-[21px]'>
    {component}
  </div>
)
if (size = "lg")   return (
  <div className='w-content  h-[482px] mt-[21px]'>
    {component}
  </div>
)
}

export default ImageContainer