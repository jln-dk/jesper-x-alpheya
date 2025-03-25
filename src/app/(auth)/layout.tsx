import { routes } from "@/config/routes";
import { getUser } from "@/utils/supabase/get-user";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (user) {
    return redirect(routes.profile);
  }

  return (
    <div className="mx-auto flex max-w-[960px] flex-col overflow-hidden rounded-lg bg-white md:flex-row">
      <div className="w-full p-8 md:max-w-[576px] md:p-10">{children}</div>

      <div className="flex-1 bg-[url('/assets/bg-laptop.jpg')] bg-cover bg-center bg-no-repeat" />
    </div>
  );
}
