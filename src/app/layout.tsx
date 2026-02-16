import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InteractiveProvider } from "@/components/interactive/InteractiveProvider";
import InteractiveWrapper from "@/components/interactive/InteractiveWrapper";
import InteractiveToggle from "@/components/ui/InteractiveToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Кошачий лендинг - Самая крутая кошка",
  description: "Вайбовый обзор на самую лучшую кошку в мире. Фото, видео и куча интерактивных фишек!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InteractiveProvider>
          <InteractiveWrapper />
          <InteractiveToggle />
          {children}
        </InteractiveProvider>
      </body>
    </html>
  );
}
