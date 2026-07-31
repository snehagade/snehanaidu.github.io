import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://snehagade.com"),
  title: "Sneha Naidu Gade, MD | Pediatrician",
  description:
    "Board-certified pediatrician in Phoenix, Arizona, with focused interests in congenital heart disease, cardiac imaging, newborn care, and equitable child health.",
  other: {
    "codex-preview": "development",
  },
  openGraph: {
    title: "Sneha Naidu Gade, MD",
    description:
      "Board-certified pediatrician in Phoenix, Arizona, guided by clinical curiosity and thoughtful care.",
    url: "https://snehagade.com",
    siteName: "Sneha Naidu Gade, MD",
    type: "website",
  },
  alternates: {
    canonical: "https://snehagade.com",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
