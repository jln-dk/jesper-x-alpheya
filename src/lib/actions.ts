"use server";

import { env } from "@/config/env";
import { routes } from "@/config/routes";
import { signInSchema, signUpSchema } from "@/lib/schemas";
import { encodedRedirect } from "@/utils/redirect";
import { createClient } from "@/utils/supabase/server";
import { parseWithZod } from "@conform-to/zod";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: signUpSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { firstName, lastName, email, password } = submission.value;
  const name = `${firstName} ${lastName}`;

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      routes.signUp,
      "Email and password are required",
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}${routes.authCallback}`,
      data: {
        name,
        full_name: name,
      },
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", routes.signUp, error.message);
  } else {
    return encodedRedirect(
      "success",
      routes.signUp,
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const signInAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: signInSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { email, password } = submission.value;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", routes.signIn, error.message);
  }

  return redirect(routes.profile);
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect(routes.signIn);
};

const handleSocialLogin = async (
  provider: "facebook" | "google" | "twitter",
) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${env.baseUrl}${routes.authCallback}`,
    },
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect("error", routes.signIn, error.message);
  }

  if (data.url) {
    return redirect(data.url);
  }

  return encodedRedirect("error", routes.signIn, "Something went wrong");
};

export const loginWithFacebook = async () => handleSocialLogin("facebook");
export const loginWithGoogle = async () => handleSocialLogin("google");
export const loginWithTwitter = async () => handleSocialLogin("twitter");
