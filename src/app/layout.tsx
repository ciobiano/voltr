import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { ViewportProvider } from "@/components/primitives/viewport-provider";
import { PreLoader } from "@/components/primitives/pre-loader";
import "./globals.css";

const f37Bolton = localFont({
  src: [
    { path: "./fonts/F37Bolton-Thin.woff2", weight: "100" },
    { path: "./fonts/F37Bolton-ExtraLight.woff2", weight: "200" },
    { path: "./fonts/F37Bolton-Light.woff2", weight: "300" },
    { path: "./fonts/F37Bolton-Regular.woff2", weight: "400" },
    { path: "./fonts/F37Bolton-Medium.woff2", weight: "500" },
    { path: "./fonts/F37Bolton-Bold.woff2", weight: "700" },
    { path: "./fonts/F37Bolton-SuperBold.woff2", weight: "800" },
  ],
  variable: "--font-display",
  display: "swap",
  
});

const suisseIntl = localFont({
  src: [
    { path: "./fonts/suisse/SuisseIntl-Thin.woff2", weight: "100" },
    { path: "./fonts/suisse/SuisseIntl-ThinIt.woff2", weight: "100", style: "italic" },
    { path: "./fonts/suisse/SuisseIntl-Light.woff2", weight: "300" },
    { path: "./fonts/suisse/SuisseIntl-Book.woff2", weight: "400" },
    { path: "./fonts/suisse/SuisseIntl-Medium.woff2", weight: "500" },
    { path: "./fonts/suisse/SuisseIntl-MediumIt.woff2", weight: "500", style: "italic" },
    { path: "./fonts/suisse/SuisseIntl-Bold.woff2", weight: "700" },
    { path: "./fonts/suisse/SuisseIntl-Black.woff2", weight: "900" },
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
      <body className="font-sans antialiased ">
        <ViewportProvider />
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
