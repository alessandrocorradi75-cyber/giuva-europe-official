"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { europeBrand, europeNavItems, europeSocialLinks } from "@/data/europa";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <Linkedin size={15} />;
  if (label === "Instagram") return <Instagram size={15} />;
  if (label === "YouTube") return <Youtube size={15} />;
  return <Facebook size={15} />;
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 items-center rounded-xl bg-[#081f3a] px-2">
              <img src="/brand/giuva-europe-logo.svg" alt="GIUVA - Global Initiative for Urban Volunteering & Awareness" className="h-10 w-auto" />
            </span>
            <div>
              <strong className="block text-2xl font-black text-[#081f3a]">{europeBrand.name}</strong>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#16825d]">{europeBrand.fullName}</p>
            </div>
          </div>
          <p className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">Your Community.<br />Your Ideas. Your Impact.</p>
          <p className="mt-5 max-w-md leading-7 text-slate-600">{europeBrand.description}</p>
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">{europeBrand.legalBoundary}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Platform</h2>
            <div className="mt-4 grid gap-2">
              {europeNavItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">{item.label}</Link>)}
              <Link href="/transparency" className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">Transparency</Link>
              <Link href="/governance" className="text-sm font-semibold text-slate-600 hover:text-[#081f3a]">Governance</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Countries</h2>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-600">
              <span>GIUVA Italy</span><span>GIUVA Romania</span><span>GIUVA Spain</span><span>GIUVA Austria</span><span>GIUVA Hungary</span><span>Future countries</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#1f5fbf]">Contact</h2>
          <div className="mt-4 grid gap-2">
            <p className="text-sm font-semibold text-slate-600">Email: {europeBrand.email}</p>
            <p className="text-sm font-semibold text-slate-600">GIUVA Europe is the umbrella platform for national GIUVA communities.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {europeSocialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 transition hover:border-[#16825d] hover:text-[#16825d]">
                <SocialIcon label={item.label} />{item.label}
              </a>
            ))}
            {["Privacy", "GDPR", "Cookie Policy"].map((item) => <Link key={item} href="/transparency" className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 hover:text-[#081f3a]">{item}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

