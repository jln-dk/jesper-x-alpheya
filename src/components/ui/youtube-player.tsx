import { WithClassName } from "@/lib/types";
import { cn } from "@/lib/utils";

type YoutubePlayerProps = WithClassName<{
  videoId: string;
}>;

export function YoutubePlayer({ videoId, className }: YoutubePlayerProps) {
  return (
    <div className={cn("relative h-0 w-full pb-[56.25%]", className)}>
      <iframe
        width="560"
        height="315"
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
