import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./partials/header";
import Footer from "./partials/footer";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientQueryProvider from "./components/ClientQueryProvider";

const queryClient = new QueryClient();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Ecommerce",
  description: "Generated by prince",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Toaster position="top-right" toastOptions={{
          style: {
            border: '1px solid rgb(0, 17, 113)',
            padding: '16px',
            color: '#713200',
          }
          
         }} />
        <Header></Header>
        <ClientQueryProvider>{children}</ClientQueryProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
