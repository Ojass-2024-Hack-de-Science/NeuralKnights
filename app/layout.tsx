import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eSuraksha",
  description:
    "Protecting users from malicious websites and providing security solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </html>
  );
}
