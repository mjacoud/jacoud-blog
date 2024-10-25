import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "100 900",
});
const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jacoud's Blog",
  description: "Jacoud's Dev blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoBold.variable} ${robotoRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
