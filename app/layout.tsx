import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata:Metadata={title:"دليل التخصصات الجامعية الجزائرية",description:"اكتشف التخصصات الجامعية في الجزائر وشروط الالتحاق وآفاق الدراسة."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" suppressHydrationWarning><body className="min-h-screen"><Header/><main>{children}</main><Footer/></body></html>}
