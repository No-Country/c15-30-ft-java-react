export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const BASE_URL = process.env.BASE_URL;

    const data = {
      nombre: "test",
      apellido: "test",
      email: "test@test.com",
      password: "123456789asA",
      país: 1,
      descripción: null,
      rol: null,
      avatar: null,
      puntos: 50,
      activo: true,
    };

    const response = await fetch(`${BASE_URL}/usuarios`, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al realizar la solicitud: ${response.status}`);
    }

    const users = await response.json();

    return Response.json({
      status: 200,
      body: { users },
    });
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: "Error en el servidor" },
    };
  }
}
