"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "../ui/button";
import { textBold } from "@/styles/fonts";
import CreateProjectDialog from "./CreateProjectDialog";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { Input } from "../ui/input";
import CreateProjectView from "./CreateProjectView";

const components = [
  {
    title: "Pon un titulo a tu proyecto",
    href: "#title",
    description:
      "Un titulo corto pero atractivo atraerá el interés de más colaboradores.",
  },
  {
    title: "Agrega la descripcion",
    href: "#description",
    description:
      "Una descripcion clara de lo que quieres lograr es la mejor forma de conseguir a los colabores indicados.",
  },
  {
    title: "Añade imagenes",
    href: "#images",
    description:
      "Las imagenes son una excelente manera de compartir el avance actual de tu proyecto y referencias de lo que quieres lograr.",
  },
  {
    title: "Vincula los recursos",
    href: "#resources",
    description:
      "Vincula los repositorios, links u otros recursos con los que desarrollas tu actual proyecto.",
  },
  {
    title: "Agrega las categorias.",
    href: "#categories",
    description:
      "Las categorias son necesarias para que tu proyecto sea visible para las personas correctas.",
  },
  {
    title: "Agrega las tareas.",
    href: "#tasks",
    description:
      "Definir tareas claras es la calve para lograr los resultados que esperas.",
  },
];

export function ProjectsNavigation() {
  return (
    <NavigationMenu className={"bg-blue-50 rounded-2xl"}>
      <NavigationMenuList className={""}>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inspirate</NavigationMenuTrigger>
          <NavigationMenuContent className={""}>
            <ul className="grid gap-3 w-[300px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-primary to-[#82688F] p-6 no-underline outline-none focus:shadow-md"
                    href="/explore"
                  >
                    <div className="mb-2 mt-4 text-lg text-primary-foreground">
                      Ver proyectos
                    </div>
                    <p className="text-sm leading-tight text-primary-foreground">
                      Busca proyectos similares al tuyo
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="https:/google.com" title="Referencias externas">
                Busca referencias externas.
              </ListItem>
              <ListItem href="/guide/colaborar" title="Beneficios de colaborar">
                Conoces las ventajas de inscribirte en un proyecto como
                colaborador.
              </ListItem>
              <ListItem href="/guide/tareas" title="Como manejar tus tareas">
                Aprende a configurar y gestionar tus tareas de manera efectiva.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Diseña</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* dialog */}

          <CreateProjectDialog
            className={cn(buttonVariants({ variant: "default" }))}
            opener={
              <NavigationMenuLink
                className={cn(buttonVariants({ variant: "default" }), "w-24")}
              >
                Configura
              </NavigationMenuLink>
            }
            content={{ title: "Crear proyecto", description: "hola 2" }}
          >
            <CreateProjectView />
          </CreateProjectDialog>

           {/* dialog */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef((props, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            props.className
          )}
          {...props}
        >
          <div
            className={cn(
              textBold.className,
              "text-sm font-medium leading-none text-primary"
            )}
          >
            {props.title}
          </div>
          <p className="line-clamp-5 text-sm leading-snug text-muted-foreground">
            {props.children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
