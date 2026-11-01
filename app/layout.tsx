
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse Analytics | Performance Dashboard",
  description:
    "A performance dashboard demonstrating React code splitting and lazy loading.",
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
