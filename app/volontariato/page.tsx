import type { Metadata } from "next";
import { ItalyMockForm } from "@/components/ItalyMockForm";
import { PageHero } from "@/components/PageHero";
import { italyProgramOptions, italyVolunteerFields } from "@/data/italia";

export const metadata: Metadata = {
  title: "Diventa volontario | GIUVA APS Italia",
  description: "Modulo di interesse per diventare volontario GIUVA APS Italia."
};

export default function ItalyVolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volontariato"
        title="Diventa volontario GIUVA"
        text="GIUVA accoglie persone motivate a contribuire alla crescita delle comunitÃ  attraverso azioni concrete, formazione, solidarietÃ  e partecipazione civica."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <ItalyMockForm
            fields={italyVolunteerFields}
            submitLabel="Invia candidatura"
            successMessage="Grazie. La candidatura Ã¨ stata registrata localmente in demo; nella versione finale sarÃ  inviata alla segreteria GIUVA."
          >
            <label>
              <span className="field-label">Programma di interesse</span>
              <select className="field" name="programma" required>
                {italyProgramOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="field-label">Messaggio</span>
              <textarea className="field min-h-32" name="messaggio" required />
            </label>
          </ItalyMockForm>
        </div>
      </section>
    </>
  );
}

