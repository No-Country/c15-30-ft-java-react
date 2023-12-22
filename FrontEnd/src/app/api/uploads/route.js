// Importamos la función "NextResponse" desde el paquete "next/server"
import { NextResponse } from "next/server"; 

// Importamos la versión 2 de Cloudinary como "cloudinary"
import { v2 as cloudinary } from "cloudinary"; 

// Configuracion de Cloudinary con las credenciales proporcionadas en variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Esto en realidad no sé del todo que hace XD pero siempre lo uso porque así viene en la docu (mala mia lo sé)
export const dynamic = "force-dynamic";

// Se define un metodo Post que toma el request del usuario
export async function POST(request, response) {
  // Obtenemos los datos del formulario enviado en la petición
  const data = await request.formData();
  
  // Se obtiene la imagen enviada por el usuario para la portada del proyecto
  const image = data.get("portada");

  // Verificamos si se envió la portada, si no, devolvemos un error
  if (!image)
    return NextResponse.json({
      error: "No se ha enviado la portada",
      status: 404,
    });

  // Convertimos la imagen a un array de bytes y luego a un buffer
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Realizamos la subida de la imagen a Cloudinary utilizando una promesa para poder trabajar con async await
  const uploadImage = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "CoCode/proyectos",
          transformation: [
            { height: 500, width: 500, crop: "thumb" },
            {
              color: "#FFFFFF",
              overlay: {
                font_family: "verdana",
                font_size: 40,
                font_weight: "bold",
                text_align: "left",
                text: "CoCode",
              },
            },
            { flags: "layer_apply", gravity: "south_east", x: 20, y: 20 },
            { quality: "auto:best" },
          ],
        },
        (err, result) => {
          // Manejamos posibles errores durante la subida de la imagen
          if (err) return reject(err);

          // Resolvemos la promesa con el resultado de la subida exitosa
          resolve(result);
        }
      )
      .end(buffer);
  });

  // Obtenemos la URL segura de la imagen subida
  const imageUrl = uploadImage.secure_url;

  // Devolvemos una respuesta en formato JSON con la URL de la imagen y un mensaje de éxito
  return NextResponse.json({
    message: "Imagen subida con éxito",
    url: imageUrl,
    status: 200,
  });
}