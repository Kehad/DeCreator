import type { Metadata } from "next";
// import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
// import localFont from 'next/font/local';
import "./globals.css";
// import DashboardLayout from "./layout/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const myFont = localFont({
//   src: '@public/font/CrimsonText-Regular.ttf' ,
//   variable: "--font-crimson-text",
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // const crimsonTex = localFont({
//   src: [
//     {
//       path: '@public/font/CrimsonText-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '@public/font/CrimsonText-Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '@public/font/CrimsonText-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '@public/font/CrimsonText-BoldItalic.ttf',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
//   variable: "--font-crimson-text",
// })

// const crimsonText = Crimson_Text({
//   variable: "--font-crimson-text",
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

export const metadata: Metadata = {
  title: "DeCreator",
  description: "DeCreator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased` }
        // className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        {children}
        {/* <DashboardLayout>{children}</DashboardLayout> */}
      </body>
    </html>
  );
}
