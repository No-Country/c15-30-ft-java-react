// import animation from '../img/animation.png'
import Comments from './Comments'
import { Explore } from './Explore'

const card = {
  nombre: 'Rodrigo Rodriguez',
  rol: 'AI developer',
  descripcion: 'La implementación de un proyecto de reconocimiento facial con inteligencia artificial ofrece numerosas ventajas en diversos sectores. Esta tecnología avanzada facilita la automatización de procesos de autenticación y verificación de identidad, mejorando la seguridad y la eficiencia en entornos como el acceso a instalaciones seguras o la gestión de asistencia.',
}

const cardExplore = {
  nombre: 'Animacion 3D',
  // imagen: animation,
  imagen: 'src/img/animation.png',
  tecnologiaUno: 'AI',
  tecnologiaDos: 'Q&A',
  tecnologiaTres: 'Blender',
  descripcion: 'Estoy aprendiendo a usar Maya para animación 3d.Quiero recrear la escena de buscando a nemo donde Dori dice sherman calle Wallaby 42 Sydney pero no sé cómo.',
}


export default function Home() {
  return (
    <main>
        {/* Sección Comment */}
      <div className='w-96 border border-black border-dashed'>
        <Comments
          nombre={card.nombre}
          rol={card.rol}
          like={true}
          descripcion={card.descripcion}
        />
      </div>

      {/* Sección Explore */}
      <div className='w-96 border border-black border-dashed'>
        <Explore
          nombre={cardExplore.nombre}
          imagen={cardExplore.imagen}
          like={true}
          tecnologiaUno={cardExplore.tecnologiaUno}
          tecnologiaDos={cardExplore.tecnologiaDos}
          tecnologiaTres={cardExplore.tecnologiaTres}
          descripcion={cardExplore.descripcion}
        />
      </div>
    </main>
  )
}
