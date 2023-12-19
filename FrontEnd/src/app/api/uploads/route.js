import API from "@/axios/apiConnection";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";
export async function POST(request, response) {
  const data = await request.formData();
  const image = data.get("portada");

  if (!image)
    return NextResponse.json({
      error: "No se ha enviado la portada",
      status: 404,
    });

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

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
          if (err) return reject(err);

          resolve(result);
        }
      )
      .end(buffer);
  });

  const imageUrl = uploadImage.secure_url;

  return NextResponse.json({
    message: "imagen subida con exito",
    url: imageUrl,
    status: 200,
  });
}
