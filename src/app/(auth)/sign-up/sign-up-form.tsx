"use client";

import { FormCheckbox } from "@/components/ui/form-checkbox";
import { FormInput } from "@/components/ui/form-input";
import { SubmitButton } from "@/components/ui/submit-button";
import { routes } from "@/config/routes";
import { useFormValidator } from "@/hooks/use-form-validator";
import { signUpAction } from "@/lib/actions";
import { signUpSchema } from "@/lib/schemas";
import Link from "next/link";

export function SignUpForm() {
  const { form, fields, action } = useFormValidator({
    serverAction: signUpAction,
    schema: signUpSchema,
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="flex flex-col gap-8"
    >
      <div className="flex flex-row gap-6">
        <FormInput
          type="text"
          label="First Name"
          placeholder="Jane"
          key={fields.firstName.key}
          name={fields.firstName.name}
          defaultValue={fields.firstName.initialValue}
          error={fields.firstName.errors?.at(0)}
        />
        <FormInput
          type="text"
          label="Last Name"
          placeholder="Doe"
          key={fields.lastName.key}
          name={fields.lastName.name}
          defaultValue={fields.lastName.initialValue}
          error={fields.lastName.errors?.at(0)}
        />
      </div>

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

      <FormCheckbox
        name="newsletter"
        label="Subscribe to our monthly newsletter"
      />

      <div className="flex flex-col gap-5">
        <div className="text-dimmed text-sm">
          By clicking below you agree to our{" "}
          <a href="#" className="text-foreground underline hover:no-underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-foreground underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </div>

        <SubmitButton pendingText="Signing up...">Sign up</SubmitButton>

        <p className="text text-dimmed text-center font-serif text-sm">
          Already have an account?{" "}
          <Link className="text-foreground underline" href={routes.signIn}>
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
