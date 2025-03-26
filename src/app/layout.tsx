import { AlpheyaLogo } from "@/components/ui/alpheya-logo";
import { env } from "@/config/env";
import { Cabin, PT_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(env.baseUrl),
  title: "Jesper x Alpheya",
  description: "Next.js Coding Test",
};

const ptSerif = PT_Serif({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const cabin = Cabin({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ptSerif.className} ${cabin.className}`}
      suppressHydrationWarning
    >
      <body>
        <nav className="flex h-16 items-center justify-center bg-white">
          <Link href={"/"}>
            <AlpheyaLogo />
          </Link>
        </nav>

        <main className="mx-auto max-w-[1268px] p-8 px-6">{children}</main>
      </body>
    </html>
  );
}
