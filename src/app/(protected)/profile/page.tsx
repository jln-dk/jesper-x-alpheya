import { CVUpload } from "@/app/(protected)/profile/cv-upload";
import { signOutAction } from "@/lib/actions";
import { getUser } from "@/utils/supabase/get-user";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    return null;
  }

  const { name, picture } = user.user_metadata;

  return (
    <>
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="flex flex-row items-center gap-3 md:gap-4">
          {picture && (
            <Image
              src={picture}
              alt={name}
              className="h-10 w-10 rounded-full bg-gray-300 md:h-12 md:w-12"
              width={48}
              height={48}
            />
          )}
          <div className="flex min-w-0 flex-col">
            <h1 className="font-serif text-lg md:text-xl">{name}</h1>
            <div className="text-dimmed text-sm break-words md:text-base">
              {user.email}
            </div>
          </div>
        </div>

        <button
          onClick={signOutAction}
          className="inline-block cursor-pointer rounded-lg bg-gray-200 px-3 py-1 text-sm transition-colors hover:bg-gray-300 md:text-base"
        >
          Sign out
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CVUpload />
      </Suspense>
    </>
  );
}
