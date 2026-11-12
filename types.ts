// أنواع البيانات الأساسية للتخصصات الجامعية
export type Specialty = {
  slug: string;
  nom_ar: string;
  nom_fr: string;
  domaine: string;
  filiere: string[];
  diplome: string;
  duree: string;
  description_ar: string;
  competences: string[];
  debouches: string[];
  seuil_2025: { serie: string; moyenne: number | null; remarque?: string }[];
  universites: string[];
  tags: string[];
};
