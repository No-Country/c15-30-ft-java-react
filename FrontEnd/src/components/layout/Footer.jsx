import React from "react";
import WomanLaptop from "../../../public/WomanLaptop.png";
import { Button } from "../ui/button";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-t from-[#2D213F] to-[#784AB7] w-full h-[250px] rounded-[38px] flex">
      <section className="w-full">
        {/* eslint-disable */}
        <img
          src={WomanLaptop.src}
          alt=""
          width={224}
          height={172}
          className="absolute bottom-0 left-0 md:bottom-5 md:right-0 "
        />
        {/* eslint-enable */}
      </section>
      <section className="w-full text-center text-white mt-10 flex flex-col md:flex-row  gap-5 md:gap-10 items-center">
        <h2 className={cn(textBold.className, "text-[2.0rem]")}>CoCode</h2>
        <p>Desarrollada para No Country</p>
        <Button tipo={"squared"} className={"w-[150px] bg-[#211048]"}>
          Ver equípo
        </Button>
        <p className="text-[12px] text-gray-400">CoCode © 2023</p>
      </section>
    </div>
  );
};

export default Footer;
