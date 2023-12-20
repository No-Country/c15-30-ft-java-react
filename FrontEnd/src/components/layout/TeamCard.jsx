"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import TextDisplayWithTitle from "@/components/ui/textDisplayWIthTitle";
import { motion } from "framer-motion";

export const TeamCard = ({ handleCardUser, selectUser, teamData }) => {

  const teamCards = teamData.map((data, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleCardUser}
      data-person={index}
      className="flex flex-col justify-center items-center w-48 h-60 p-4 shadow-inner rounded-[50px]  bg-secondary mb-5"
    >
      <Avatar>
        <AvatarImage src={data.avatar} />
      </Avatar>
      <div className="p-4">
        <p className={cn(textBold.className, "text-primary")}>{data.name}</p>
        <p className={cn(textBold.className, "text-gray-400")}>{data.rol}</p>
      </div>
    </motion.div>
  ));
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{teamCards}</div>
      {selectUser && (
        <TextDisplayWithTitle
          type={"vertical"}
          variant={"primary"}
          content={{
            title: selectUser.name,
            data: selectUser.descripcion,
          }}
        />
      )}
    </section>
  );
};
