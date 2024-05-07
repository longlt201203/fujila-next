import type { Metadata } from "next";
import "./globals.css";
import RootProvider from "@/providers/RootProvider";

export const metadata: Metadata = {
  title: "Fujila",
  description: "Developed by Le Thanh Long",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><RootProvider>{children}</RootProvider></body>
    </html>
  );
}
