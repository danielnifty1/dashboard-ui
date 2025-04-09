/* eslint-disable jsx-a11y/alt-text */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Menu from "../../components/Menu"
import NavBar from "@/components/NavBar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-screen">
    {/* LEFT SIDE */}
    <div className="w-[14%] md:[8%] xl:w-[14%]  p-4 flex flex-col gap-2 h-screen ">
      {/* LOGO N NAME */}
      <Link href="/" className="flex justify-center items-center lg:justify-start gap-2 ">
        <Image alt="" src="/logo.png" width={32} height={32} />
        <span className="hidden lg:block font-bold">School Name</span>
      </Link>

      <Menu />
    </div>

    {/* RIGHT SIDE */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll p-2 flex flex-col ">
      <NavBar />
      {children} 
      </div>

  </div>;
}
