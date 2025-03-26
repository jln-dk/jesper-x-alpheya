import { SignUpForm } from "@/app/(auth)/sign-up/sign-up-form";
import { Divider } from "@/components/ui/divider";
import { FormMessage, Message } from "@/components/ui/form-message";
import { SocialLogins } from "@/components/ui/social-logins";
import { routes } from "@/config/routes";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("success" in searchParams) {
    return (
      <div className="md:p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl md:text-2xl">Create an account</h1>
        <p className="text text-dimmed mt-4 font-serif text-sm">
          Already have an account?{" "}
          <Link className="text-foreground underline" href={routes.signIn}>
            Log in
          </Link>
        </p>
      </div>

      <SocialLogins />

      <Divider text="Or" />

      <FormMessage message={searchParams} />

      <SignUpForm />
    </div>
  );
}
