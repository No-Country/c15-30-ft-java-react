import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import {
  FaBook,
  FaBookOpen,
  FaCloudsmith,
  FaDotCircle,
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
import { ModeToggle } from "./ModeToggle";

const WorkspaceSideBar = ({ user }) => {
  return (
    <>
      <nav className="hidden md:block md:h-20 md:w-full bg-secondary">
        <ul className="h-20 p-3 flex justify-between items-center">
          <li className="flex gap-5">
            <div>
              <Avatar>
                <AvatarImage src={user.imageUrl} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className={cn(textBold.className, "text-primary text-sm")}>
                {user.nombre}
              </p>
              <p className={cn("text-gray-400 text-sm")}>{user.rol}</p>
            </div>
          </li>
          <li>
            <Button tipo={"rounded"} variant={""} size={"roundedSm"}>
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

        por definir
        {/* Enlaces */}
        <p className="text-sm text-gray-400 mt-5">Enlaces</p>
        <Separator className={"my-1"} />
        <hr className="border-gray-400" />
        <Separator className={"my-1"} />
        <nav>
          <ul className="flex flex-col gap-4">
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
                href={"/user"}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaUser /> <p className="text-sm text-gray-400">Usuario</p>
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
      {/* eslint-disable */}
      <section className="absolute bottom-0">
        <img src={Group.src} alt="" />
      </section>
      {/* eslint-enable */}
    </>
  );
};

export default WorkspaceSideBar;
