import { routes } from "@/config/routes";
import { getUser } from "@/utils/supabase/get-user";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (!user) {
    return redirect(routes.signIn);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg md:p-8">
      {children}
    </div>
  );
}
