"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const variants = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-90 w-90",
}

/**
 * =======================
 *         Avatar
 * =======================
 * @props {string} variant - Tamaño del avatar. Las opciones son:
 *   - sm: Pequeño (h-10 w-10)
 *   - md: Mediano (h-16 w-16)
 *   - lg: Grande (h-24 w-24)
 *   - xl: Extra grande (h-90 w-90)
 *   - sin valor: Tamaño predeterminado (h-10 w-10)
 * **************************************************************
 * 
 * @example
 * import { Avatar } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Avatar variant="md" onClick={() => console.log('Avatar clickeado')}>
 *       <Avatar.Image src="URL_de_la_imagen" alt="Descripción de la imagen" />
 *       <Avatar.Fallback>
 *         Cargando...
 *       </Avatar.Fallback>
 *     </Avatar>
 *   );
 * };
 */
const Avatar = React.forwardRef(({ className, variant, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", variants[variant], className)}
    {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * =======================
 *    Avatar.Image
 * =======================
 * @props {string} src - URL de la imagen del avatar.
 * @props {string} alt - Descripción de la imagen para accesibilidad.
 * **************************************************************
 * 
 * @example
 * import { Avatar, AvatarImage } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Avatar>
 *       <AvatarImage src="URL_de_la_imagen" alt="Descripción de la imagen" />
 *       <Avatar.Fallback>
 *         Cargando...
 *       </Avatar.Fallback>
 *     </Avatar>
 *   );
 * };
 */
const AvatarImage = React.forwardRef(({ className,...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * =======================
 *  Avatar.Fallback
 * =======================
 * @props {string} children - Contenido de respaldo en caso de que la imagen no cargue.
 * **************************************************************
 * 
 * @example
 * import { Avatar, AvatarFallback } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Avatar>
 *       <Avatar.Image src="URL_de_la_imagen" alt="Descripción de la imagen" />
 *       <AvatarFallback>
 *         Cargando...
 *       </AvatarFallback>
 *     </Avatar>
 *   );
 * };
 */
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted animate-pulse",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
