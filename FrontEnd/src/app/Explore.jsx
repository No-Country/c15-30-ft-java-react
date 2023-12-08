import clsx from "clsx"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"

/**
 * Explore Component
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.nombre - Nombre del Proyecto.
 * @param {string} props.imagen - Imagen asociada al proyecto.
 * @param {boolean} props.like - Indica si el comentario ha sido marcado como "me gusta".
 * @param {string} props.tecnologiaUno - Elección de primera tecnologia usada en el proyecto.
 * @param {string} props.tecnologiaDos - Elección de segunda tecnologia usada en el proyecto.
 * @param {string} props.tecnologiaTres - Elección de tercera tecnologia usada en el proyecto.
 * @param {string} props.descripcion - Breve descripción relativa el proyecto.
 * @example
 * // Ejemplo de uso del componente Explore
 * <Explore
 *   nombre='Animacion 3D'
 *   imagen='Imagen Animación 3D'
 *   like={true}
 *   tecnologiaUno='AI'
 *   tecnologiaDos='Q&A'
 *   tecnologiaTres='Blender'
 *   descripcion='Construccion de Animacion 3D  para pelicula Buscando a MEMO'
 * />
 */

const styleSpan = 'bg-purple-800 text-white text-sm   px-3  rounded-xl'


export const Explore = ({ nombre, imagen, like, tecnologiaUno, tecnologiaDos, tecnologiaTres, descripcion }) => {
    return (
        <section className="h-full w-full p-6">
            <div className="mt-6">
                <strong >{nombre}</strong>
                <div className="mt-2 h-full w-full">
                    <div className="flex justify-between relative rounded-xl overflow-hidden border-red-200">
                        {/* eslint-disable */}
                        <img
                            src={'https://th.bing.com/th/id/R.6f4c38c16297b4f25c5b21f3bdb79fbe?rik=pnDRgSjUMZ5RfA&riu=http%3a%2f%2fimages.memes.com%2fmeme%2f674933&ehk=j8goEdI4pxUh7eGJ7UfV7IuBeXKOPHp97aatf5ODjy0%3d&risl=&pid=ImgRaw&r=0'}
                            width={400}
                            height={313}
                            alt={`Imagen ${nombre}`} />
                        {/* eslint-enable */}
                        <div className='absolute top-2 right-2 text-white'>
                            {like === true ? <FaHeart className=" w-[34px] h-[29.76px] "/> : <FaRegHeart className=" w-[34px] h-[29.76px] " />}
                        </div>
                        <div className="absolute flex w-full justify-end gap-2 bottom-2 right-2">
                            <Badge size={'sm'}>{tecnologiaUno}</Badge>
                            <Badge size={'sm'}>{tecnologiaDos}</Badge>
                            <Badge size={'sm'}>{tecnologiaTres}</Badge>
                        </div>
                    </div>
                </div>
                <p className="mt-2">{descripcion}</p>
            </div>
        </section>
    )
}
