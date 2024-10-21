import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preview FlashUi components",
  description: "Preview FlashUi components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* <p className="  "></p> */}
        <div className={`${manrope.className}`}>{children}</div>
        {/* <p className=" text-center text-xs text-zinc-600 ">
          Powered by paradoxui.com
        </p> */}
      </body>
    </html>
  );
}
