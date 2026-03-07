import type { Metadata } from "next";
import "./globals.css";
import basePath from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Bui Dinh Bao | AI Engineer & Data Science",
  description:
    "Portfolio of Bui Dinh Bao — AI Engineer, Data Science graduate, and software developer based in Ho Chi Minh City, Vietnam.",
  keywords: ["AI Engineer", "Data Science", "Machine Learning", "Portfolio", "Bui Dinh Bao"],
  authors: [{ name: "Bui Dinh Bao" }],
  openGraph: {
    title: "Bui Dinh Bao | AI Engineer & Data Science",
    description: "Portfolio of Bui Dinh Bao — AI Engineer and Data Science graduate.",
    type: "website",
    images: [{ url: `${basePath}/logo.svg` }],
  },
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/logo.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
