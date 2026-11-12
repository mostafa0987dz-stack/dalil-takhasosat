"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
export default function Header() {
  const [dark,setDark]=useState(false); const [open,setOpen]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("theme"); const value=saved==="dark";setDark(value);document.documentElement.classList.toggle("dark",value)},[]);
  function toggle(){const value=!dark;setDark(value);document.documentElement.classList.toggle("dark",value);localStorage.setItem("theme",value?"dark":"light")}
  const links=[["الرئيسية","/"],["التخصصات","/specialties"],["حاسبة المعدل","/calculator"],["عتبات القبول","/seuils"],["عن الدليل","/about"]];
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"><div className="container-page flex h-16 items-center justify-between">
    <Link href="/" className="text-lg font-black text-brand-700 dark:text-blue-400">دليل التخصصات <span className="text-slate-500">الجزائرية</span></Link>
    <nav className="hidden items-center gap-6 md:flex">{links.map(([label,url])=><Link key={url} href={url} className="text-sm font-semibold text-slate-600 hover:text-brand-700 dark:text-slate-300">{label}</Link>)}</nav>
    <div className="flex items-center gap-2"><button aria-label="تبديل الوضع الليلي" onClick={toggle} className="rounded-xl border p-2 dark:border-slate-700">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><button aria-label="القائمة" className="rounded-xl border p-2 md:hidden dark:border-slate-700" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div>{open&&<nav className="container-page grid gap-3 pb-4 md:hidden">{links.map(([label,url])=><Link onClick={()=>setOpen(false)} key={url} href={url}>{label}</Link>)}</nav>}</header>;
}
