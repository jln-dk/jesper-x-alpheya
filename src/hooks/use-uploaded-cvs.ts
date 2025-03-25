"use client";

import { getCvFileName } from "@/utils/cv-files";
import { createClient } from "@/utils/supabase/client";
import { useCallback, useEffect, useState } from "react";

type UploadState = "loading" | "error" | "success";

type CvFile = {
  name: string;
  originalName: string;
  createdAt: string;
};

export function useUploadedCvs() {
  const supabase = createClient();
  const [state, setState] = useState<UploadState>("loading");
  const [cvs, setCvs] = useState<CvFile[]>([]);

  const fetchFiles = useCallback(async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        throw new Error("User not found");
      }

      const { data, error } = await supabase.storage
        .from("cvs")
        .list(user.data.user.id, {
          sortBy: {
            column: "created_at",
            order: "desc",
          },
        });

      if (error) {
        throw error;
      }

      const files = data.map((file) => ({
        name: getCvFileName(file.name),
        originalName: file.name,
        createdAt: file.created_at,
      }));
      setCvs(files);
      setState("success");
    } catch (error) {
      console.error("Error fetching files:", error);
      setState("error");
    }
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return {
    cvs,
    state,
    refreshFiles: fetchFiles,
  };
}
