import { WithClassName } from "@/lib/types";
import { Check } from "lucide-react";

type FormCheckboxProps = WithClassName<{
  name: string;
  label: string;
}>;

export function FormCheckbox({ name, label }: FormCheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={name}
          name={name}
          className="peer h-6 w-6 cursor-pointer appearance-none rounded-[6px] border border-black checked:bg-black"
        />
        <Check className="pointer-events-none absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
      </div>
      <label htmlFor={name} className="cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
}
