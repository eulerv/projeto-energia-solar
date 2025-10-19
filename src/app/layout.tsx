import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


export const metadata = {
  title: "Use+ Energia Solar",
  description: "Sustentabilidade e Economia",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
      <Analytics />
    </html>
  );
}
