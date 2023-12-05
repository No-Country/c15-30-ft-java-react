import { NextResponse } from "next/server";

export async function GET() {
  const param = 1
  const data = {
    proyectos: [
      {
        id: 1,
        nombre: "Proyecto 1",
        descripcion: "Descripción del Proyecto 1 de verdad",
        colaboradores: [1, 2, 3],
        imagenPerfilUrl: "https://ejemplo.com/imagen1.jpg",
      },
      {
        id: 2,
        nombre: "Proyecto 2",
        descripcion: "Descripción del Proyecto 2",
        colaboradores: [4, 5],
        imagenPerfilUrl: "https://ejemplo.com/imagen2.jpg",
      },
      {
        id: 3,
        nombre: "Proyecto 3",
        descripcion: "Descripción del Proyecto 3",
        colaboradores: [2, 3, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen3.jpg",
      },
      {
        id: 4,
        nombre: "Proyecto 4",
        descripcion: "Descripción del Proyecto 4",
        colaboradores: [1, 4, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen4.jpg",
      },
      {
        id: 5,
        nombre: "Proyecto 5",
        descripcion: "Descripción del Proyecto 5",
        colaboradores: [3, 5],
        imagenPerfilUrl: "https://ejemplo.com/imagen5.jpg",
      },
      {
        id: 6,
        nombre: "Proyecto 6",
        descripcion: "Descripción del Proyecto 6",
        colaboradores: [1, 5, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen6.jpg",
      },
    ],
  }

  const filtered = data.proyectos.filter(proyecto => proyecto.id === param);
  return NextResponse.json(filtered);
}
