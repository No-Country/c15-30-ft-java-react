import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * Comments Component
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.nombre - Nombre del usuario.
 * @param {string} props.rol - Rol o Perfil de Usuario.
 * @param {string} props.descripcion - Descripción del proyecto.
 * @param {boolean} props.like - Indica si el comentario ha sido marcado como "me gusta".
 * 
 * @example
 * // Ejemplo de uso del componente Comments
 * <Comments
 *   nombre="Rodrigo Rodriguez"
 *   rol="AI Developer"
 *   descripcion="Proyecto de reconomiciento facial usando Inteligencia Artificial"
 *   like={true}
 * />
 */

const Comments = ({ nombre, rol, descripcion, like }) => {
    return (
        <section
            className="Conteiner h-full w-full p-6">
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt='Imagen perfil'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <strong>{nombre}</strong>
                        <p className='text-sm'>{rol}</p>
                    </div>
                </div>
                {like === true ? <FaHeart /> : <FaRegHeart />}
            </div>
            <div className='mt-6'>
                <p>{descripcion}</p>
            </div>

        </section>
    )
}

export default Comments
