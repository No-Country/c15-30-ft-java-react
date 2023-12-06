import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
/**
 * =======================
 *    CreateProjectDialog
 * =======================
 * Componente que representa un diálogo para la creación de proyectos.
 *
 * @component
 * @param {Object} props - Propiedades para el componente CreateProjectDialog.
 * @param {React.ReactNode} props.opener - Elemento que actúa como el activador del diálogo.
 * @param {Object} content - Contenido del diálogo. Contiene los siguientes campos:
 * - {string} title - Título del diálogo.
 * - {string} description - Descripción del diálogo.
 * @returns {React.ReactElement} - Elemento React que representa el diálogo de creación de proyectos.
 *
 * @example
 * // Uso del componente CreateProjectDialog
 * import { CreateProjectDialog } from './Ruta';
 *
 * const MiComponente = () => {
 *   const opener = <button>Open Dialog</button>;
 *   const content = {
 *     title: "Nuevo Proyecto",
 *     description: "Ingrese los detalles del nuevo proyecto.",
 *   };
 *
 *   return <CreateProjectDialog opener={opener} content={content} />;
 * };
 */
const CreateProjectDialog = ({ opener, content, children }) => {
  return (
    <Dialog >
      <DialogTrigger>{opener}</DialogTrigger>
      <DialogContent className="w-[98vw]">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>

        {children}

        
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
