import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NY | My Projects",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inconsolata.variable} h-full antialiased`}>
      <body className="min-h-dvh bg-[#F2F0EF] font-sans text-neutral-900">
        <ScrollToTop />
        <Navbar />
        <main className="pt-16 min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
