import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Provider from '@/app/context/clientProvider';
import NavBar from "@/components/main/NavBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REGISTR HSN APP',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ru">
      <body
        className={`${inter.className} min-h-screen min-w-screen`}
      >
      <div className={"flex justify-center"}>
        <Provider>{children}<NavBar/></Provider>
      </div>
      </body>
    </html>
  );
}
