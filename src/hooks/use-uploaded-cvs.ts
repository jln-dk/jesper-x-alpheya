"use client";

import { getCvFileName } from "@/utils/cv-files";
import { createClient } from "@/utils/supabase/client";
import { useCallback, useEffect, useState } from "react";

type CvFile = {
  originalName: string;
  name: string;
  createdAt: string;
};

export const useUploadedCvs = () => {
  const supabase = createClient();

  const [cvs, setCvs] = useState<CvFile[]>([]);
  const [state, setState] = useState<"loading" | "error" | "success">(
    "loading",
  );

  const fetchFiles = useCallback(async () => {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      setState("error");
      return;
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
      console.error("Error fetching files:", error);
      setState("error");
      return;
    }

    if (data) {
      const files = data.map((file) => ({
        originalName: file.name,
        name: getCvFileName(file.name),
        createdAt: file.created_at,
      }));
      setCvs(files);
      setState("success");
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
};
