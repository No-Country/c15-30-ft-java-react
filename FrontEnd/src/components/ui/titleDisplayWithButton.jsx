import { cn } from '@/lib/utils'
import { textBold } from '@/styles/fonts'
import React from 'react'
import { Button } from './button'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const data = {
  title: "Tus colaboraciones"
}

/**
 * =======================
 * TitleDisplayWithButton
 * =======================
 * @props {Object} data - Contenido del componente, con la propiedad:
 *   - title: Título que se muestra en el componente.
 * **************************************************************
 * 
 * @example
 * import TitleDisplayWithButton from './Ruta';
 *
 * // Uso del componente con datos personalizados
 * const CustomTitleDisplay = () => {
 *   return (
 *     <TitleDisplayWithButton
 *       data={{
 *         title: "Tus colaboraciones personalizadas",
 *       }}
 *     />
 *   );
 * };
 */
const TitleDisplayWithButton = (/* {data} */) => {
  return (
    <div className='flex justify-between items-center'>
      <h2 className={cn(textBold.className, "")}>{data.title}</h2>
      <section className='flex gap-3'>
      <Button tipo={'rounded'} size={'roundedSm'}><FaChevronLeft /></Button>
      <Button tipo={'rounded'} size={'roundedSm'}><FaChevronRight /></Button>
      </section>
    </div>
  )
}

export default TitleDisplayWithButton