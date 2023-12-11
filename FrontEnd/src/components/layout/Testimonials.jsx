import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { FaQuoteLeft } from "react-icons/fa";
import { Card } from "../ui/card";

const Testimonials = ({ content }) => {
  return (
    <Card className="relative shadow-md w-[325px] h-[272px] rounded-[50px] mt-10">
      <Avatar
        variant={"lg"}
        className="absolute left-1/2 transform -translate-x-1/2 top-[-20px] shadow-md"
      >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <FaQuoteLeft className="absolute top-3/6 left-1/2 -translate-x-1/2 text-gray-400 text-center text-[24px]" />
      <p className="mt-[150px] text-center text-gray-400">
        Texto de prueba en el area del testimonio
      </p>
      <h2 className={cn(textBold.className, "mt-5 text-center text-primary")}>
        Nombre{" "}
      </h2>
    </Card>
  );
};

export default Testimonials;
