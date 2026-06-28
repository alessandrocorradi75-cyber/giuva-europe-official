import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EuropeContactForm } from "@/components/EuropeContactForm";
import { communityGroups, europeContactFields } from "@/data/europa";

export const metadata: Metadata = { title: "Community", description: "Join GIUVA Europe and start building community initiatives." };

export default function CommunityPage() {
  return <><PageHero eyebrow="Community" title="GIUVA is where communities meet." text="Join, share an idea, open a local conversation or help build a useful project for your community." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]"><aside className="card p-7 md:p-8"><h2 className="text-3xl font-black text-[#081f3a]">Who belongs here?</h2><div className="mt-6 grid gap-2">{communityGroups.map((group) => <span key={group} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700">{group}</span>)}</div><Link href="/programmes" className="btn btn-blue mt-6 w-full">Explore programmes</Link></aside><EuropeContactForm fields={europeContactFields} submitLabel="Join the Community" successMessage="Thank you. Your request has been validated locally for this demo and is ready for future secretariat integration."><label><span className="field-label">Your idea or motivation *</span><textarea className="field min-h-36" name="message" required /></label></EuropeContactForm></div></section></>;
}
