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
      <body className="bg-yellow-500">{children}</body>
      <Analytics />
    </html>
  );
}
