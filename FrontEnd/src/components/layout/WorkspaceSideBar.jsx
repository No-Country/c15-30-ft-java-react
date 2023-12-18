import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import {
  FaBook,
  FaBookOpen,
  FaCloudsmith,
  FaRegCommentDots,
  FaRegHeart,
  FaSlidersH,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Button } from "../ui/button";
import Group from "../../../public/Group.png";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import defaultAvatar from "../../../public/defaultAvatar.png";

const testObject = {
  id: "1",
  nombre: "Tarea 1",
  descripcion: "Descripcion de la tarea 1",
  estado: "Pendiente",
  prioridad: "Alta",
};

const WorkspaceSideBar = ({ user }) => {
  return (
    <>
      <nav className="hidden md:block md:h-20 md:w-full bg-secondary">
        <ul className="h-20 p-3 flex justify-between items-center">
          <li className="flex gap-5 items-center">
            <div>
              <Link href={"/user"}>
                <Avatar className={"cursor-pointer"}>
                  <AvatarImage src={user.avatar} alt="@shadcn" />
                  <AvatarFallback>
                    <Image
                      src={defaultAvatar.src}
                      width={100}
                      height={100}
                      alt="default avatar"
                    />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>
            <div>
              <p className={cn(textBold.className, "text-primary text-sm")}>
                {user.nombre}
              </p>
              <p className={cn("text-gray-400 text-sm")}>{user.rol}</p>
            </div>
          </li>
          <li>
            <Button tipo={"rounded"} variant={"link"} size={"roundedSm"}>
              <FaSlidersH />
            </Button>
          </li>
        </ul>
      </nav>
      {/* links section */}
      <section className="px-5">
        {/* Acciones */}
        <p className="text-sm text-gray-400 mt-5">Acciones</p>
        <Separator className={"my-1"} />
        <hr className="border-gray-400" />
        <Separator className={"my-1"} />
        <nav>
          <ul>
            <li>
              <Link
                href={`/workspace/tasks?command=${btoa(
                  JSON.stringify(testObject)
                )}`}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaUser /> <p className="text-sm text-gray-400">Tareas</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Enlaces */}
        <p className="text-sm text-gray-400 mt-5">Enlaces</p>
        <Separator className={"my-1"} />
        <hr className="border-gray-400" />
        <Separator className={"my-1"} />
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href={"/user"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaUser /> <p className="text-sm text-gray-400">Usuario</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/explore"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaBookOpen /> <p className="text-sm text-gray-400">Explore</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaBook /> <p className="text-sm text-gray-400">Proyectos</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaUsers />{" "}
                <p className="text-sm text-gray-400">Colaboradores</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaCloudsmith />{" "}
                <p className="text-sm text-gray-400">Interacciones</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/feedback"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaRegCommentDots />{" "}
                <p className="text-sm text-gray-400">Feedback</p>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaRegHeart />{" "}
                <p className="text-sm text-gray-400">Favoritos</p>
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <br />
      </section>
      <section className="w-full absolute bottom-0 flex justify-center">
        <Image
          src={Group.src}
          width={200}
          height={200}
          alt="Imagen personas colaborando"
          className="filter drop-shadow-md dark:brightness-75 dark:opacity-20 "
        />
      </section>
    </>
  );
};

export default WorkspaceSideBar;
