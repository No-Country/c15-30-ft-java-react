import { cn } from "@/lib/utils"
import { text, textMedium, textBold } from "@/styles/fonts"
/**
 * =======================
 *  Contenedor de Títulos
 * ========================
 * 
 * @component
 * 
 * Componente que presenta diferentes estilos de contenedores para títulos y subtítulos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.type - Tipo de contenedor. Puede ser:
 *   - "titleAndDescription": Contenedor para un título y un subtítulo.
 *   - "sectionTitle": Contenedor para un título de sección y un subtítulo.
 * 
 * @param {Object} props.content - Contenido del contenedor.
 * @param {string} props.content.title - Título a mostrar.
 * @param {string} props.content.subTitle - Subtítulo a mostrar.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el contenedor de títulos.
 * **************************************************************
 * 
 * @example
 * 
 * // Uso del componente TitleContainer en otro componente
 * import { TitleContainer } from './Ruta';
 * 
 * const MiComponente = () => {
 *   const titleContent = {
 *     title: "Título Principal",
 *     description: "descripcion."
 *   };
 * 
 *   return (
 *     <TitleContainer 
 *       type="titleAndDescription" 
 *       content={titleContent} 
 *     />
 *   );
 * };
 */
const TitleContainer = ({type, content}) => {
  if (type === "titleAndDescription")   return (
    <div className="px-[26.5px] w-[377px] flex flex-col gap-4 mt-[30px]">
      <h2 className={cn(textMedium.className, "text-subtitle text-center")}>{content.title}</h2>
      <h3 className={cn(text.className, "text-sm text-center text-gray-500")}>{content.description}</h3>
    </div>
  )

  if (type === "sectionTitle")   return (
    <div className="px-[26.5px] w-[377px] flex flex-col gap-4 mt-[30px]">
      <h2 className={cn(textMedium.className, "text-title text-center")}>{content.title}</h2>
      <h3 className={cn(text.className, "text-sm text-center text-gray-500")}>{content.description}</h3>
    </div>
  )
}
export default TitleContainer