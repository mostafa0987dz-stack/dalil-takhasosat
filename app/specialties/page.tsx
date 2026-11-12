"use client";
import {useMemo,useState} from "react";
import data from "@/data/specialties.json";
import type {Specialty} from "@/types";
import SpecialtyCard from "@/components/SpecialtyCard";
const items=data as Specialty[];
export default function SpecialtiesPage(){const[q,setQ]=useState("");const[d,setD]=useState("الكل");const[f,setF]=useState("الكل");const[c,setC]=useState("الكل");
const domains=["الكل",...Array.from(new Set(items.map(x=>x.domaine)))];const filieres=["الكل",...Array.from(new Set(items.flatMap(x=>x.filiere)))];const diplomas=["الكل",...Array.from(new Set(items.map(x=>x.diplome)))];
const filtered=useMemo(()=>items.filter(x=>(x.nom_ar+" "+x.nom_fr+" "+x.description_ar).toLowerCase().includes(q.toLowerCase())&&(d==="الكل"||x.domaine===d)&&(f==="الكل"||x.filiere.includes(f))&&(c==="الكل"||x.diplome===c)),[q,d,f,c]);
return <section className="container-page py-12"><h1 className="section-title mb-3">جميع التخصصات</h1><p className="mb-8 text-slate-500">ابحث وفلتر التخصصات حسب المجال والشعبة والشهادة.</p><div className="mb-8 grid gap-3 rounded-2xl border bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-4"><input className="input" placeholder="اسم التخصص..." value={q} onChange={e=>setQ(e.target.value)}/><select className="input" value={d} onChange={e=>setD(e.target.value)}>{domains.map(x=><option key={x}>{x}</option>)}</select><select className="input" value={f} onChange={e=>setF(e.target.value)}>{filieres.map(x=><option key={x}>{x}</option>)}</select><select className="input" value={c} onChange={e=>setC(e.target.value)}>{diplomas.map(x=><option key={x}>{x}</option>)}</select></div><p className="mb-4 text-sm text-slate-500">النتائج: {filtered.length}</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(x=><SpecialtyCard key={x.slug} item={x}/>)}</div>{!filtered.length&&<p className="py-16 text-center text-slate-500">لا توجد نتائج مطابقة.</p>}</section>}
