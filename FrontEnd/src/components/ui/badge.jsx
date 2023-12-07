import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const sizes = {
  sm: 'w-[72px] h-[19px]'
}

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
function Badge({
  className,
  variant,
  size,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), sizes[size], className)} {...props} />);
}
export { Badge, badgeVariants }