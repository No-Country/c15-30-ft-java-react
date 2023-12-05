import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    proyectos: [
      {
        nombre: "Proyecto 1",
        descripcion: "Descripción del Proyecto 1",
        colaboradores: [1, 2, 3],
        imagenPerfilUrl: "https://ejemplo.com/imagen1.jpg",
      },
      {
        nombre: "Proyecto 2",
        descripcion: "Descripción del Proyecto 2",
        colaboradores: [4, 5],
        imagenPerfilUrl: "https://ejemplo.com/imagen2.jpg",
      },
      {
        nombre: "Proyecto 3",
        descripcion: "Descripción del Proyecto 3",
        colaboradores: [2, 3, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen3.jpg",
      },
      {
        nombre: "Proyecto 4",
        descripcion: "Descripción del Proyecto 4",
        colaboradores: [1, 4, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen4.jpg",
      },
      {
        nombre: "Proyecto 5",
        descripcion: "Descripción del Proyecto 5",
        colaboradores: [3, 5],
        imagenPerfilUrl: "https://ejemplo.com/imagen5.jpg",
      },
      {
        nombre: "Proyecto 6",
        descripcion: "Descripción del Proyecto 6",
        colaboradores: [1, 5, 6],
        imagenPerfilUrl: "https://ejemplo.com/imagen6.jpg",
      },
    ],
  });
}
