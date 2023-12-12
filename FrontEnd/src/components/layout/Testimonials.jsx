import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { FaQuoteLeft } from "react-icons/fa";
import { Card } from "../ui/card";

const Testimonials = ({ content }) => {
  return (
    <Card className="relative shadow-md w-[325px] h-[272px] rounded-[50px] mt-10 md:mt-20">
      <Avatar
        variant={"lg"}
        className="absolute left-1/2 transform -translate-x-1/2 top-[-20px] shadow-md"
      >
        <AvatarImage src={content.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <FaQuoteLeft className="absolute top-[100px] left-1/2 -translate-x-1/2 text-gray-400 text-center text-[24px]" />
      <p className="mt-[150px] text-center text-gray-400 h-[60px] px-3 line-clamp-2">
        {content.text}
      </p>
      <h2 className={cn(textBold.className, "mt-5 text-center text-primary")}>
        {content.nombre}
      </h2>
    </Card>
  );
};

export default Testimonials;
