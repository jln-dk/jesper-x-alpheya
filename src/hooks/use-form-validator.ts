import { SubmissionResult, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { ZodSchema } from "zod";

type UseFormProps<T extends ZodSchema> = {
  serverAction: (
    prevState: unknown,
    formData: FormData,
  ) => Promise<SubmissionResult<string[]>>;
  schema: T;
};

export function useFormValidator<T extends ZodSchema>({
  serverAction,
  schema,
}: UseFormProps<T>) {
  const [lastResult, action] = useActionState(serverAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return { form, fields, action };
}
