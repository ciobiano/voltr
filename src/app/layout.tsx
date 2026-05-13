import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { LenisProvider } from "@/motion/lenis-provider";
import { ScrollProvider } from "@/motion/scroll-provider";
import "./globals.css";

const f37Bolton = localFont({
  src: [
    { path: "./public/F37Bolton-Light.woff2", weight: "300" },
    { path: "./public/F37Bolton-Medium.woff2", weight: "500" },
  ],
  variable: "--font-display",
  display: "swap",
});

const suisseIntl = localFont({
  src: [
    { path: "./public/suisse/SuisseIntl-Book.woff2", weight: "400" },
    { path: "./public/suisse/SuisseIntl-Medium.woff2", weight: "500" },
  ],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLTR — Motion Without Noise",
  description:
    "A cinematic automotive brand built on calm intelligence and architectural motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${f37Bolton.variable} ${suisseIntl.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <LenisProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
