import { SignInForm } from "@/app/(auth)/sign-in/sign-in-form";
import { Divider } from "@/components/ui/divider";
import { FormMessage, Message } from "@/components/ui/form-message";
import { SocialLogins } from "@/components/ui/social-logins";
import { routes } from "@/config/routes";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl md:text-2xl">Log in</h1>
        <p className="text text-dimmed mt-4 font-serif text-sm">
          Don't have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href={routes.signUp}
          >
            Sign up
          </Link>
        </p>
      </div>

      <SocialLogins />

      <Divider text="Or" />

      <FormMessage message={searchParams} />

      <SignInForm />
    </div>
  );
}
