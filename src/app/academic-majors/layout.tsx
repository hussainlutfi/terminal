import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "مستشارو مستقبلي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          dir="rtl"
          className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
        >
          <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
