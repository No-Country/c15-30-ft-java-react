"use client";

// Importar las dependencias necesarias
import { useState, useEffect } from "react";
import { useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import HomeGroup from "../../../public/HomeGroup.png";
import HomeHombreTrabajando from "../../../public/HomeHombreTrabajando.png";
import { Button } from "../ui/button";

// Definir la variante de animación
const draw = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

// Sería cool que las imágenes salieran de un lado hacia el centro con un efecto stagger de 0.5 o 0.3
const imgVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
};
const imgVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const ScrollContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-3 justify-between h-[1000px]">
      <div className="flex flex-col justify-between py-24 ml-24">
        <section>
          <h3 className={cn(textBold.className, "text-title text-end")}>
            Explora la comunidad
          </h3>
          <p className="text-end">
            Descubre las increíbles ideas que se están llevando a cabo bajo la
            filosofía open source.
          </p>
        </section>
        {/* eslint-disable */}
        <motion.img
          variants={imgVariantsLeft}
          initial="hidden"
          whileInView="visible"
          className="mt-20 w-[357px]"
          src={HomeGroup.src}
          alt=""
        />
        {/* eslint-enable */}
      </div>
      <div className="flex justify-center">{children}</div>
      <div className="flex flex-col justify-between py-24 mr-24">
        {/* eslint-disable */}
        <motion.img
          variants={imgVariantsRight}
          initial="hidden"
          whileInView="visible"
          className="mb-34"
          src={HomeHombreTrabajando.src}
          alt=""
        />
        {/* eslint-enable */}
        <section>
          <h3 className={cn(textBold.className, "text-title text-center")}>
            Comienza un proyecto
          </h3>
          <p className="text-center ">
            Crea un proyecto o explora la lista de la comunidad y únete al que
            más te guste
          </p>
          <div className="w-full flex justify-center mt-20">
            <Button>Proyectos</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

// Definir el componente Scrolly
const Scrolly = () => {
  const svgRef = useRef(null);
  const controls = useAnimation();
  const [scrollValue, setScrollValue] = useState(0);
  const [circleVisibility, setCircleVisibility] = useState([
    false,
    false,
    false,
  ]);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const updateScrollProgress = () => {
      requestAnimationFrame(updateScrollProgress);
      const currentScrollValue = scrollYProgress.current * 700;
      setScrollValue(currentScrollValue);

      // Actualizar visibilidad de los círculos
      setCircleVisibility([
        currentScrollValue > 70 && currentScrollValue < 180,
        currentScrollValue > 300 && currentScrollValue < 400,
        currentScrollValue > 500 && currentScrollValue < 600,
      ]);
    };

    updateScrollProgress();

    return () => {
      cancelAnimationFrame(updateScrollProgress);
    };
  }, [scrollYProgress]);

  return (
    <div className={"w-full h-full mt-[100px]"}>
      <div className="p-4 relative">
        <h4 className="mb-4 text-sm font-medium leading-none"></h4>
        <ScrollContainer>
          <motion.svg
            className={""}
            ref={svgRef}
            width="100"
            height="900"
            viewBox="0 0 50 600"
            initial="hidden"
            animate={controls}
          >
            <motion.line
              x1="25"
              y1="0"
              x2="25"
              y2={scrollValue}
              stroke="#0099ff"
              strokeWidth="4"
              strokeLinecap="round"
              variants={draw}
              custom={1}
              className={"w-5"}
            />
            {circleVisibility.map((isVisible, index) => (
              <motion.g key={index}>
                <motion.circle
                  className={"animate-pulse"}
                  cx="25"
                  cy={index * 210 + 90}
                  r="10"
                  fill={isVisible ? "#523280" : "#8D55DD"}
                />
                <motion.circle
                  className={"animate-pulse"}
                  cx="25"
                  cy={index * 210 + 90}
                  r="15" // Tamaño del círculo exterior
                  fill="transparent"
                  stroke="#523280" // Color de la línea circular
                  strokeWidth="4" // Grosor de la línea circular
                  strokeDasharray="125.6" // Longitud total de la línea circular (2 * PI * radio)
                  strokeDashoffset={isVisible ? 0 : 125.6} // Longitud visible inicial (0 para que empiece desde el principio)
                />
              </motion.g>
            ))}
          </motion.svg>
        </ScrollContainer>
      </div>
    </div>
  );
};

// Exportar el componente Scrolly
export default Scrolly;
