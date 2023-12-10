import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { FaDotCircle, FaSlidersH } from "react-icons/fa";
import { Button } from "../ui/button";
import Group from "../../../public/Group.png";

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
      holaaaaaaaaaaaaaaa
      {/* eslint-disable */}
      <section className="absolute bottom-0">
        <img src={Group.src} alt="" />
      </section>
      {/* eslint-enable */}
    </>
  );
};

export default WorkspaceSideBar;
