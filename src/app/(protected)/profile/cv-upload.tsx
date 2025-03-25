"use client";

import { FileItem } from "@/components/ui/file-item";
import { useCvUpload } from "@/hooks/use-upload-cv";
import { useUploadedCvs } from "@/hooks/use-uploaded-cvs";
import { wait } from "@/utils/wait";
import { AnimatePresence, motion } from "framer-motion";
import { UploadIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export function CVUpload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const { state: filesState, cvs, refreshFiles } = useUploadedCvs();
  const { state: uploadState, uploadCv } = useCvUpload();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setUploadedFile(file);
      await uploadCv(file);

      // Wait for at least 2 seconds and refresh the files
      await Promise.all([wait(2000), refreshFiles()]);
      setUploadedFile(null);
    },
    [setUploadedFile, uploadCv, refreshFiles],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
  });

  return (
    <>
      <h2 className="mb-4 text-lg md:text-xl">Upload your CV</h2>

      <div
        {...getRootProps()}
        className={`relative rounded-lg border-2 border-dashed p-8 transition-colors duration-200 ease-in-out ${isDragActive ? "bg-background/50 border-gray-800" : "border-gray-300"} hover:bg-background/50 cursor-pointer hover:border-gray-800`}
      >
        <input {...getInputProps()} disabled={uploadState === "loading"} />

        <div className="flex flex-col items-center justify-center text-center">
          <UploadIcon
            className={`mb-4 h-12 w-12 ${isDragActive ? "text-foreground" : "text-gray-400"}`}
          />
          <p className="mb-2 font-serif text-lg">
            {isDragActive
              ? "Drop your CV here"
              : "Drag & drop your CV here, or click to select"}
          </p>
          <p className="text-sm text-gray-500">Supported formats: PDF, DOCX</p>
        </div>
      </div>

      {/* File Preview */}
      {uploadedFile && (
        <div className="mt-4">
          <FileItem name={uploadedFile.name} state={uploadState} />
        </div>
      )}

      {uploadState === "error" && (
        <p className="mt-2 text-sm text-rose-600">
          Error uploading file. Please try again.
        </p>
      )}

      {/* Uploaded Files */}
      <div className="mt-8">
        <h3 className="mb-2 text-lg">Uploaded files</h3>
        {filesState === "success" ? (
          <>
            {cvs.length === 0 ? (
              <p className="text-sm text-gray-500">No files uploaded yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                <AnimatePresence initial={false} mode="popLayout">
                  {cvs.map((cv) => (
                    <motion.div
                      key={cv.originalName}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.5 }}
                    >
                      <FileItem name={cv.name} createdAt={cv.createdAt} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </>
        ) : filesState === "loading" ? (
          <div className="border-foreground h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
        ) : filesState === "error" ? (
          <p className="text-sm text-rose-600">
            Error fetching files. Please try again.
          </p>
        ) : null}
      </div>
    </>
  );
}
