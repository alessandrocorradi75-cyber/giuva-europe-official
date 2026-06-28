import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ItalyMockForm } from "@/components/ItalyMockForm";
import { PageHero } from "@/components/PageHero";
import { italyBrand, italyContactFields, italySocialLinks } from "@/data/italia";

export const metadata: Metadata = {
  title: "Contatti | GIUVA APS Italia",
  description: "Contatti GIUVA APS Italia."
};

export default function ItalyContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Contatta GIUVA APS Italia"
        text="Scrivi per volontariato, partnership, programmi, progetti civici o informazioni generali."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="grid gap-5">
            <article className="card p-6">
              <h2 className="text-2xl font-black text-[#081f3a]">{italyBrand.name}</h2>
              <p className="mt-2 font-bold text-slate-600">{italyBrand.fullName}</p>
              <p className="mt-4 leading-7 text-slate-600">Sede: {italyBrand.seat}</p>
              <p className="leading-7 text-slate-600">Email: {italyBrand.email}</p>
              <p className="leading-7 text-slate-600">Telefono: {italyBrand.phone}</p>
            </article>
            <article className="card p-6">
              <h2 className="text-2xl font-black text-[#081f3a]">Social</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {italySocialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 transition hover:text-[#16825d]"
                  >
                    {link.label === "LinkedIn" ? <Linkedin size={16} /> : link.label === "Instagram" ? <Instagram size={16} /> : <Facebook size={16} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          </aside>
          <ItalyMockForm
            fields={italyContactFields}
            submitLabel="Invia messaggio"
            successMessage="Grazie. Il messaggio Ã¨ stato registrato localmente in demo; nella versione finale sarÃ  inviato alla segreteria GIUVA."
          >
            <label>
              <span className="field-label">Messaggio</span>
              <textarea className="field min-h-36" name="messaggio" required />
            </label>
          </ItalyMockForm>
        </div>
      </section>
    </>
  );
}

