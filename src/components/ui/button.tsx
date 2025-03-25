import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "border-foreground flex h-[48px] w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-full border px-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outline: "hover:bg-gray-100 focus:bg-gray-100 text-sm",
        primary: "bg-black text-white border-0 text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
