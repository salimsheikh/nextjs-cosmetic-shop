import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmetic Shop | Elegance Unveiled: Your Premier Destination for Beauty",
  description: "Discover the art of beauty at Elegance Unveiled, where we offer a curated selection of high-quality cosmetics to enhance your natural allure. From luxurious skincare to vibrant makeup, our products are designed to celebrate your unique beauty. Explore our collections, indulge in self-care, and let your radiance shine with every purchase. Welcome to Elegance Unveiled, where beauty meets sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
