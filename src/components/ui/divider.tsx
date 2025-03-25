import { WithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = WithClassName<{
  text: string;
}>;

export function Divider({ text, className }: Props) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-4">
          <span className="opacity-50">{text}</span>
        </span>
      </div>
    </div>
  );
}
