import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EuropeContactForm } from "@/components/EuropeContactForm";
import { europeBrand, europeContactEmails, europeContactFields, europeSocialLinks } from "@/data/europa";

export const metadata: Metadata = { title: "Contact", description: "Contact GIUVA Europe for community, projects, partnerships and media." };

function SocialIcon({ label }: { label: string }) { if (label === "LinkedIn") return <Linkedin size={16} />; if (label === "Instagram") return <Instagram size={16} />; if (label === "YouTube") return <Youtube size={16} />; return <Facebook size={16} />; }

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Contact GIUVA Europe" text="Write to GIUVA Europe for community participation, local initiatives, partnerships, youth projects, media or general information." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]"><aside className="grid gap-5"><article className="card p-6"><h2 className="text-2xl font-black text-[#081f3a]">{europeBrand.name}</h2><p className="mt-2 font-bold text-slate-600">{europeBrand.fullName}</p>{europeContactEmails.map((email) => <p key={email.label} className="mt-3 leading-7 text-slate-600">{email.label}: {email.value}</p>)}</article><article className="card p-6"><h2 className="text-2xl font-black text-[#081f3a]">Social</h2><div className="mt-4 flex flex-wrap gap-2">{europeSocialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 transition hover:text-[#16825d]"><SocialIcon label={link.label} />{link.label}</a>)}</div></article></aside><EuropeContactForm fields={europeContactFields} submitLabel="Send message" successMessage="Thank you. Your message has been validated locally for this demo and is ready for future GIUVA Europe secretariat integration."><label><span className="field-label">Message *</span><textarea className="field min-h-36" name="message" required /></label></EuropeContactForm></div></section></>;
}
