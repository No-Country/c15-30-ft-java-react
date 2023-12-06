/* eslint-disable @next/next/no-img-element */
import clsx from "clsx"
import { FaHeart, FaRegHeart } from "react-icons/fa"

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
            <div className="flex justify-between items-center">
                <button>Search</button>
                <button>Sort</button>
            </div>
            <div className="mt-6">
                <strong >{nombre}</strong>
                <div className="mt-2 h-full w-full rounded-sm border">
                    <div className="flex justify-between ">
                    <img
                        src={imagen}
                        alt={`Imagen ${nombre}`} />
                    {like === true ? <FaHeart /> : <FaRegHeart />}
                    </div>
                  
                    <div className="flex justify-around">
                        <span className={clsx(styleSpan)}>{tecnologiaUno}</span>
                        <span className={clsx(styleSpan)}>{tecnologiaDos}</span>
                        <span className={clsx(styleSpan)}>{tecnologiaTres}</span>
                    </div>
                </div>
                <p className="mt-2">{descripcion}</p>
            </div>
        </section>
    )
}
