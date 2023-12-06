import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const config = {
  width: "w-[219px]",
  height: "h-[49px]",
  textSize: "text-[16px]",
  widthSm: "w-[70px]",
  heightSm: "h-[40px]",
  textSizeSm: "text-[14px]",
};

const tipos = {
  iconText: "flex justify-between",
  rounded: "rounded-full px-1 py-1",
  squared: "px-5"
};

const buttonVariants = cva(
  `${textBold.className} inline-flex items-center justify-center whitespace-nowrap round ed-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-input border-black bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: `${config.height} ${config.width} ${config.textSize}  px-[27.87px]`,
        xs: "px-[15px] w-[20px]",
        sm: ` ${config.heightSm} ${config.widthSm} ${config.textSizeSm} px-[23.74px]`,
        md:  "h-11 px-8",
        squared: "w-[77px] h-[49px]",
        squaredSm: "w-[70px] h-[40px]",
        rounded: "w-[50px] h-[50px]",
        roundedSm: "w-[40px] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * =======================
 *         Boton
 * =======================
 * @props {string} tipo - 
 *  - iconText: renderiza un botón con un icono.
 *  - rounded: renderiza un botón circular.
 *  - squared: renderiza un botón cuadrado.
 *  - sin valor: renderiza un botón por defecto.
 * @props {string} variant - Estilos. Las opciones son:
 *   - default
 *   - destructive
 *   - outline
 *   - secondary
 *   - ghost
 *   - link
 *   - sin valor: renderiza un botón por defecto.
 * @props {string} size - Tamaño. Las opciones son:
 *   - default
 *   - sm
 *   - lg
 *   - rounded: circular de tamaño normal
 *   - roundedSm: circular de tamaño pequeño
 *   - sin valor: renderiza un botón por defecto. 
 * **************************************************************
 * 
 * @example
 * import { Button } from './Ruta';
 *
 * const MiComponente = () => {
 *   return (
 *     <Button variant="default" size="default"     onClick={() => console.log('¡Botón clickeado!')}>
 *       Mi Botón
 *     </Button>
 *   );
 * };
 */

const Button = React.forwardRef(
  ({ className, tipo, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (tipo === "iconText")
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className,  } ), tipos[tipo]
          )}
          ref={ref}
          {...props}
        />
      );
      if (tipo === "rounded")
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className,  } ), tipos[tipo]
          )}
          ref={ref}
          {...props}
        />
      );
      if (tipo === "squared")
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className,  } ), tipos[tipo]
          )}
          ref={ref}
          {...props}
        />
      );
    if (!tipo) return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };