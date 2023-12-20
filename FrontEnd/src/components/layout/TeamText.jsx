import React from "react";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { motion, AnimatePresence } from "framer-motion";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const defaultText =
  "Nos tomamos este reto demasiado en serio creimos que seria un proyecto divertido y despues del exito de crear Cocode para la encantadora gente de No Country, nos damos cuenta que colaborar podria ser la manera perfecta de conectar con el mundo.";

const TeamText = ({ selectUser }) => {
  return (
    <>
      <AnimatePresence>
        {" "}
        {selectUser ? (
          <div initial={{ x: -100 }} animate={{ x: 0 }}>
            <motion.div
              key={selectUser.descripcion[0]}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
            >
              <p
                className={cn(
                  textBold.className,
                  "text-[2.25rem] text-primary"
                )}
              >
                {selectUser.name}
              </p>
            </motion.div>
          </div>
        ) : (
          <div initial={{ x: -500 }} animate={{ x: 0 }}>
            {defaultText}
          </div>
        )}
        <div>
          {selectUser && (
            <motion.div
              key={selectUser.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              <p className="text-gray-400">{selectUser.descripcion}</p>
              <nav>
                <motion.ul
                  key={selectUser.name + 2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex gap-5 justify-center"
                >
                  <li>
                    <Link href={`/${selectUser.contacto}`}>
                      <FaEnvelope className="text-primary text-[34px]" />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${selectUser.contacto}`}>
                      <FaGithub className="text-primary text-[34px]" />
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${selectUser.contacto}`}>
                      <FaLinkedin className="text-primary text-[34px]" />
                    </Link>
                  </li>
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default TeamText;
