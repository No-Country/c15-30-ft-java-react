import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({
    "id": 1,
    "nombre": "Pepito",
    "apellido": "Perez",
    "rol": "Front-end Dev",
    "imageUrl": "// avatar iamge por definir //",
    "user": "Pepe",
    "mail": "PepeW@example.com",
    "password": "securePW1",
    "proyectos": 3,
    "pais": 2,
    "tecnologias": 1,
    "puntaje": 80,
    "favoritos": 5,
    "activo": true
  },);
}