import { CvUploadState } from "@/hooks/use-upload-cv";
import { CheckCircle2Icon, FileIcon, XCircleIcon } from "lucide-react";

type FileItemProps = {
  name: string;
  createdAt?: string;
  state?: CvUploadState;
};

export function FileItem({ name, createdAt, state }: FileItemProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 py-3 ${
        state === "success"
          ? "bg-green-50"
          : state === "error"
            ? "bg-rose-50"
            : "bg-background/50"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <FileIcon className="text-foreground h-6 w-6 flex-shrink-0" />
        <div className="flex min-w-0 flex-col">
          <span className="min-w-0 text-sm break-words md:text-base">
            {name}
          </span>
          {createdAt && (
            <span className="text-xs text-gray-500 md:text-sm">
              Uploaded: {new Date(createdAt).toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {state === "loading" ? (
        <div className="border-foreground h-5 w-5 flex-shrink-0 animate-spin rounded-full border-2 border-t-transparent" />
      ) : state === "success" ? (
        <CheckCircle2Icon className="h-5 w-5 flex-shrink-0 text-green-600" />
      ) : state === "error" ? (
        <XCircleIcon className="h-5 w-5 flex-shrink-0 text-rose-600" />
      ) : null}
    </div>
  );
}
