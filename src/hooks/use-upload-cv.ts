"use client";

import { makeCvFileName } from "@/utils/cv-files";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export type CvUploadState = "idle" | "loading" | "error" | "success";

export const useCvUpload = () => {
  const supabase = createClient();

  const [state, setState] = useState<CvUploadState>("idle");

  const uploadCv = async (file: File) => {
    setState("loading");

    try {
      setState("loading");

      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        setState("error");
        return;
      }

      const fileName = makeCvFileName(file);
      // Upload to user's folder
      const filePath = `${user.data.user.id}/${fileName}`;

      const { error, data } = await supabase.storage
        .from("cvs")
        .upload(filePath, file);

      if (error) {
        console.error("Error uploading file:", error);
        setState("error");
        return;
      }

      if (data) {
        setState("success");
        return data;
      }
    } catch (error) {
      setState("error");
      console.error("Error uploading file:", error);
    }
  };

  return {
    state,
    uploadCv,
  };
};
