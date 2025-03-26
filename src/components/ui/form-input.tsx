import { WithClassName } from "@/lib/types";

type FormInputProps = WithClassName<{
  type: string;
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
}>;

export function FormInput({
  type,
  name,
  label,
  defaultValue,
  placeholder,
  error,
}: FormInputProps) {
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={name} className="text-md text-foreground">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        inputMode={type === "email" ? "email" : "text"}
        placeholder={placeholder}
        className="ring-offset-background placeholder:text-muted border-foreground text-md h-10 w-full border-b bg-white py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        defaultValue={defaultValue}
      />
      {error && <div className="text-destructive mt-2 text-sm">{error}</div>}
    </div>
  );
}
