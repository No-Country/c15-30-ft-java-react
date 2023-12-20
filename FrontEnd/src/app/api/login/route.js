/* import API from '@/axios/apiConnection';
import { hashPassword } from '../encript';
const crypto = require('crypto');

export const dynamic = 'force-dynamic';

export async function POST(request, response) {
  const userData = await request.json();
  const encryptedPassword = hashPassword(userData.password);
  const resp = await API.POST("/usuario", { ...userData, password: encryptedPassword });
  if (resp) return Response.json({ mensaje: "Usuario creado correctamente" });
}

export async function LOGIN(request, response) {
  const loginData = await request.json();
  
  const user = await getUserFromDatabase(loginData.email);

  if (!user) {
    return Response.json({ mensaje: "Usuario no encontrado" });
  }

  const hashedLoginPassword = hashPassword(loginData.password);

  if (hashedLoginPassword === user.password) {
    return Response.json({ mensaje: "Inicio de sesión exitoso" });
  } else {
    return Response.json({ mensaje: "Contraseña incorrecta" });
  }
}

async function getUserFromDatabase(username) {
  
  // Aquí debería realizarse una consulta a la DB, actualmente tenemos consulta de user por id, pero deberíamos poder traer al usuario por email para comparar el password y dar o negar el acceso.

  return null;
}
 */