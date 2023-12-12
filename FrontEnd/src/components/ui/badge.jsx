import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const sizes = {
  sm: 'w-[72px] h-[19px]'
}

/**
 * =======================
 *     badgeVariants
 * =======================
 * @props {string} variant - Estilo del distintivo. Las opciones son las mismas que en Badge.
 * **************************************************************
 * 
 * @example
 * import { Badge, badgeVariants } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Badge variant={badgeVariants.variant.secondary} size="sm">
 *       Contenido del distintivo
 *     </Badge>
 *   );
 * };
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border text-center flex justify-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
/**
 * =======================
 *         Badge
 * =======================
 * @props {string} variant - Estilo del distintivo. Las opciones son:
 *   - default: Predeterminado (borde transparente, fondo y texto primarios)
 *   - secondary: Secundario (borde transparente, fondo y texto secundarios)
 *   - destructive: Destructivo (borde transparente, fondo y texto destructivos)
 *   - outline: Contorno (texto en primer plano, sin fondo)
 *   - sin valor: Predeterminado (borde transparente, fondo y texto primarios)
 * @props {string} size - Tamaño del distintivo. Las opciones son:
 *   - sm: Pequeño (w-[72px] h-[19px])
 *   - sin valor: Tamaño predeterminado (w-[72px] h-[19px])
 * **************************************************************
 * 
 * @example
 * import { Badge } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Badge variant="secondary" size="sm">
 *       Contenido del distintivo
 *     </Badge>
 *   );
 * };
 */
function Badge({
  className,
  variant,
  size,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), sizes[size], className)} {...props} />);
}
export { Badge, badgeVariants }
