"use client";

import { FormInput } from "@/components/ui/form-input";
import { SubmitButton } from "@/components/ui/submit-button";
import { routes } from "@/config/routes";
import { useFormValidator } from "@/hooks/use-form-validator";
import { signInAction } from "@/lib/actions";
import { signInSchema } from "@/lib/schemas";
import Link from "next/link";

export function SignInForm() {
  const { form, fields, action } = useFormValidator({
    serverAction: signInAction,
    schema: signInSchema,
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="flex flex-col gap-8"
    >
      <FormInput
        type="text"
        label="Email"
        placeholder="example@alpheya.com"
        key={fields.email.key}
        name={fields.email.name}
        defaultValue={fields.email.initialValue}
        error={fields.email.errors?.at(0)}
      />
      <FormInput
        type="password"
        label="Password"
        placeholder="********"
        key={fields.password.key}
        name={fields.password.name}
        defaultValue={fields.password.value}
        error={fields.password.errors?.at(0)}
      />

      <div className="flex flex-col gap-5">
        <SubmitButton pendingText="Signing in...">Sign in</SubmitButton>

        <p className="text text-dimmed text-center font-serif text-sm">
          New user?{" "}
          <Link
            className="text-foreground font-medium underline"
            href={routes.signUp}
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
