import { IconProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "[&>path]:fill-[#434343]",
      white: "[&>path]:fill-white",
    },
    dir: {
      left: "",
      right: "rotate-180",
    },
  },
  defaultVariants: {
    variant: "default",
    dir: "left",
  },
});

type ArrowIconProps = IconProps & VariantProps<typeof iconVariants>;

export function ArrowIcon({
  className,
  variant,
  dir,
  ...props
}: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
      className={cn(iconVariants({ variant, dir }), className)}
      {...props}
    >
      <path d="m4.21 14.18 8.157-8.157a.453.453 0 0 1 .641.641l-7.382 7.383h18.843a.453.453 0 0 1 0 .906H5.626l7.382 7.383a.453.453 0 1 1-.641.64L4.21 14.822a.453.453 0 0 1 0-.642Z" />
    </svg>
  );
}
