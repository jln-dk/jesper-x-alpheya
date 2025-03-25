"use client";

import { makeCvFileName } from "@/utils/cv-files";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export type CvUploadState = "idle" | "loading" | "error" | "success";

export function useUploadCv() {
  const supabase = createClient();
  const [state, setState] = useState<CvUploadState>("idle");

  const uploadCv = async (file: File): Promise<string | null> => {
    setState("loading");

    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        throw new Error("User not found");
      }

      const fileName = makeCvFileName(file);
      const filePath = `${user.data.user.id}/${fileName}`; // Upload to user's folder

      const { data, error } = await supabase.storage
        .from("cvs")
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      if (data) {
        setState("success");
        return data.path;
      }

      return null;
    } catch (error) {
      setState("error");
      console.error("Error uploading file:", error);
      return null;
    }
  };

  return {
    state,
    uploadCv,
  };
}
