import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { SideBar } from "@/components/layout/SideBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "English app",
  description: "English app by Valentino Copperi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">

      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="grid grid-cols-1 lg:grid-cols-4">

          <div className="hidden lg:block lg:fixed top-0 left-0 w-[20%]">
            <SideBar />
          </div>

          <div className="col-span-1 lg:ml-[20%] lg:col-span-4">

            <div>

              <NavBar />

            </div>

            <div className=" bg-black text-white">
              <div className="py-3" />
              <div className="flex">
                <div className="px-3" />
                <div className="bg-[#1e1e1e] w-full rounded-tl-3xl min-h-screen rounded-tr-3xl">
                  {children}
                </div>
                <div className=" px-3" />
              </div>
            </div>

          </div>

        </main>


      </body>
    </html>
  );
}
