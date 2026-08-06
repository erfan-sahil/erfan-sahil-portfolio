import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { meta } from "@/data/portfolio";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-label",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-noise font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
