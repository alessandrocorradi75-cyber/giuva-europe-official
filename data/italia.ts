import {
  Bike,
  BookOpen,
  Building2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Mail,
  Map,
  Radio,
  ShieldCheck,
  Smile,
  Sprout,
  Users,
  Utensils
} from "lucide-react";

export const italyBrand = {
  name: "GIUVA APS Italia",
  acronym: "GIUVA",
  fullName: "Global Initiative for Urban Volunteering & Awareness",
  seat: "Anguillara Sabazia / Italia",
  claim: "Connecting Communities Across Europe",
  subtitle: "Volontariato, comunitÃ , prevenzione e solidarietÃ  per un'Italia piÃ¹ forte e connessa all'Europa.",
  description:
    "GIUVA APS Italia Ã¨ un'Associazione di Promozione Sociale nata per sviluppare comunitÃ  resilienti, inclusive, sostenibili e solidali attraverso volontariato, educazione, partecipazione civica, prevenzione, cooperazione europea e innovazione sociale.",
  legalBoundary:
    "GIUVA APS Italia non sostituisce le autoritÃ  pubbliche, i servizi sanitari, il 112/118, la Protezione Civile operativa o altri enti istituzionali. Le attivitÃ  GIUVA sono civiche, educative, sociali, preventive e comunitarie.",
  email: "da inserire",
  phone: "da inserire"
};

export const italyNavItems = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/programmi", label: "Programmi" },
  { href: "/giuva-italia", label: "GIUVA Italia" },
  { href: "/europa", label: "GIUVA Europa" },
  { href: "/volontariato", label: "Volontariato" },
  { href: "/progetti", label: "Progetti" },
  { href: "/partner", label: "Partner" },
  { href: "/news", label: "News" },
  { href: "/contatti", label: "Contatti" }
];

export const italyCtas = {
  volunteer: { label: "Diventa volontario", href: "/volontariato" },
  programs: { label: "Scopri i programmi", href: "/programmi" },
  partner: { label: "Collabora con GIUVA", href: "/partner" }
};

export const italyPrograms = [
  {
    slug: "community-social",
    name: "GIUVA Community & Social",
    color: "verde community",
    accent: "bg-[#18865B]",
    icon: Users,
    description:
      "Inclusione sociale, comunitÃ  locali, volontariato civico, anziani, giovani e persone vulnerabili."
  },
  {
    slug: "riders-rescue",
    name: "GIUVA Riders Rescue",
    color: "blu navy",
    accent: "bg-[#0B2A4A]",
    icon: Bike,
    description:
      "Cultura del primo soccorso, educazione DAE, prevenzione e supporto comunitario. Non costituisce servizio sanitario, emergenza o attivitÃ  riservata alle autoritÃ  pubbliche."
  },
  {
    slug: "preparedness",
    name: "GIUVA Preparedness",
    color: "giallo europeo",
    accent: "bg-[#F2C94C]",
    icon: ShieldCheck,
    description:
      "Educazione alla prevenzione, preparazione civica, sicurezza quotidiana e cultura della responsabilitÃ  comunitaria."
  },
  {
    slug: "civil-support",
    name: "GIUVA Civil Support",
    color: "arancio civic",
    accent: "bg-[#F97316]",
    icon: Radio,
    description:
      "Supporto civico e logistico per attivitÃ  comunitarie, eventi pubblici e progetti condivisi, sempre nel rispetto della normativa vigente."
  },
  {
    slug: "academy",
    name: "GIUVA Academy",
    color: "violetto",
    accent: "bg-[#7C3AED]",
    icon: GraduationCap,
    description:
      "Percorsi formativi, workshop, cultura civica, wellbeing volontari e crescita delle competenze sociali."
  },
  {
    slug: "youth",
    name: "GIUVA Youth",
    color: "azzurro",
    accent: "bg-[#0891B2]",
    icon: Smile,
    description:
      "Partecipazione dei giovani, cittadinanza attiva, leadership civica e progetti educativi locali."
  },
  {
    slug: "senior",
    name: "GIUVA Senior",
    color: "burgundy",
    accent: "bg-[#7F1D1D]",
    icon: HandHeart,
    description:
      "Rete senior, scambio intergenerazionale, memoria sociale, supporto comunitario e partecipazione attiva."
  },
  {
    slug: "journey",
    name: "GIUVA Journey",
    color: "verde chiaro",
    accent: "bg-[#E8F7EF]",
    icon: Map,
    description:
      "Racconto fotografico, viaggi responsabili, storie di comunitÃ  e documentazione umana dei progetti GIUVA."
  },
  {
    slug: "project-pulse",
    name: "GIUVA Project Pulse",
    color: "marrone civic",
    accent: "bg-[#8B5E34]",
    icon: HeartPulse,
    description:
      "Fundraising, campagne trasparenti, CSR, sostegno alle infrastrutture civiche e rendicontazione di impatto."
  },
  {
    slug: "food-solidarity",
    name: "GIUVA Food Solidarity",
    color: "rosso solidarietÃ ",
    accent: "bg-[#B91C1C]",
    icon: Utensils,
    description:
      "Raccolta, recupero e distribuzione solidale di beni alimentari, nel rispetto della normativa vigente."
  },
  {
    slug: "community-agriculture",
    name: "GIUVA Community Agriculture",
    color: "verde agricoltura",
    accent: "bg-[#2F7D32]",
    icon: Sprout,
    description:
      "Orti sociali, agricoltura comunitaria, educazione ambientale e produzione agricola a finalitÃ  sociale."
  }
];

export const italyPartnerAreas = [
  "enti pubblici",
  "Comuni",
  "Protezione Civile",
  "scuole",
  "universitÃ ",
  "enti del Terzo Settore",
  "aziende CSR",
  "fondazioni",
  "partner europei"
];

export const italyContactEmails = [
  { label: "Segreteria", value: "da inserire", icon: Mail },
  { label: "Volontariato", value: "da inserire", icon: Users },
  { label: "Partnership", value: "da inserire", icon: Building2 },
  { label: "Progetti", value: "da inserire", icon: BookOpen }
];

export const italySocialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/giuva/?viewAsMember=true" },
  { label: "Facebook", href: "https://www.facebook.com/GIUVACommunity" },
  { label: "Instagram", href: "#" }
];

export const italyVolunteerFields = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "cognome", label: "Cognome", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefono", label: "Telefono", type: "tel", required: true },
  { name: "citta", label: "CittÃ ", type: "text", required: true }
];

export const italyContactFields = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefono", label: "Telefono", type: "tel", required: false },
  { name: "oggetto", label: "Oggetto", type: "text", required: true }
];

export const italyProgramOptions = italyPrograms.map((program) => program.name);

export const italySeoKeywords = [
  "GIUVA APS Italia",
  "volontariato Italia",
  "associazione promozione sociale",
  "comunitÃ  resilienti",
  "prevenzione",
  "DAE",
  "solidarietÃ ",
  "cooperazione europea",
  "innovazione sociale"
];

