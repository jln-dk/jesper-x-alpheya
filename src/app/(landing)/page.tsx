import { UploadIcon } from "@/components/icons/upload-icon";
import { Testimonials } from "@/components/ui/testimonials";
import { YoutubePlayer } from "@/components/ui/youtube-player";
import { routes } from "@/config/routes";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {/* Video Card */}
      <div className="overflow-hidden rounded-lg bg-gray-800">
        <YoutubePlayer videoId="uMttLe_xGq4" className="md:min-h-[367px]" />
      </div>

      {/* Upload Portfolio Card */}
      <div className="rounded-lg bg-[url(/assets/gradient-1.png)] bg-cover bg-center">
        <Link
          href={routes.profile}
          className="group flex h-full flex-col items-center justify-center gap-1.5 p-8 text-center"
        >
          <div className="border-foreground flex h-[94px] w-[94px] items-center justify-center rounded-full border-2">
            <UploadIcon className="transition-all duration-300 group-hover:translate-y-[-4px]" />
          </div>
          <h2 className="text-foreground-dark font-serif text-[28px] md:text-[32px]">
            Upload Portfolio
          </h2>
          <p className="text-foreground-dimmed font-sans">( PDF or DOCX )</p>
        </Link>
      </div>

      {/* Testimonial Card */}
      <div className="flex rounded-lg bg-white p-8 md:min-h-[367px]">
        <Testimonials />
      </div>

      {/* Enhance with AI Card */}
      <div className="rounded-lg bg-[url(/assets/gradient-2.png)] bg-cover bg-center">
        <div className="flex h-full items-center justify-center p-8">
          <h2 className="text-foreground-dark text-center font-serif text-[30px] md:text-[40px]">
            Enhance with AI
          </h2>
        </div>
      </div>
    </div>
  );
}
