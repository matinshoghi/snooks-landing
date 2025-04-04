import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Snooks - Premium Socks Made in UAE",
  description: "Experience the perfect blend of comfort and sustainability with Snooks premium organic cotton socks. Made in the UAE with a 6-month hole-free guarantee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
