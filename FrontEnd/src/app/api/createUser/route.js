import API from '@/axios/apiConnection';
import { hashPassword } from '../encript';

export const dynamic = 'force-dynamic';

export async function POST(request, response) {

  const userData = await request.json();
  const encryptedPassword = hashPassword(userData.password);
  const resp = await API.POST("/usuario", { ...userData, password: encryptedPassword })

  if (!resp) return Response.json({ mensaje: "error al crear el usuario" });

  if (resp) return Response.json({ mensaje: "usuario creado correctamente" });
  
}


