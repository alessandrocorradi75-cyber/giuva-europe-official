import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  Leaf,
  Megaphone,
  Network,
  Rocket,
  School,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EuropeContactForm } from "@/components/EuropeContactForm";
import { europeBrand, europeContactFields, europeCountries } from "@/data/europa";

export const metadata: Metadata = {
  title: "Join the Community",
  description:
    "Join GIUVA Europe as a volunteer, partner or supporter and become part of a European community in action."
};

const benefits = [
  { title: "Connection", text: "Meet people who share your values.", icon: HandHeart },
  { title: "Growth", text: "Learn new skills and gain useful experience.", icon: Sprout },
  { title: "Impact", text: "Make a real difference in your community.", icon: Rocket },
  { title: "Network", text: "Join a European community of people building change.", icon: Network },
  { title: "Purpose", text: "Be part of something meaningful.", icon: CheckCircle2 }
];

const volunteerOptions = [
  { title: "Riders Rescue", text: "Join a responsible motorcyclist community for civic presence and preparedness culture.", icon: Bike },
  { title: "Community & Social", text: "Support people in your neighbourhood through practical community action.", icon: Users },
  { title: "Academy", text: "Share knowledge, skills and learning opportunities.", icon: GraduationCap },
  { title: "Youth & Senior", text: "Help connect generations and strengthen participation.", icon: Leaf },
  { title: "Preparedness", text: "Support awareness and community readiness where appropriate.", icon: ShieldCheck }
];

const partnerTypes = [
  { title: "Municipalities and local authorities", icon: Building2 },
  { title: "Schools and universities", icon: School },
  { title: "Civic organisations and non-profits", icon: Users },
  { title: "Businesses and corporate partners", icon: Network },
  { title: "Health and safety stakeholders", icon: ShieldCheck }
];

const nextSteps = [
  "We contact you to understand your interests.",
  "We connect you with the right people and projects.",
  "You start contributing to your community."
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the Community"
        title="Become part of something bigger."
        subtitle="GIUVA is not an organisation. It is a community in action."
        text="Everyone has something to offer. Every community deserves to be heard. Join a European network of citizens, volunteers, municipalities, schools, civic organisations and businesses working together to build stronger communities."
        actions={[
          { href: "#contact", label: "Start Your Journey", tone: "primary" },
          { href: "#paths", label: "Choose Your Path", tone: "blue" }
        ]}
        visual
        imageSrc="/brand/community-manifesto-1.png"
        imageAlt="GIUVA community members working together"
      />

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="why-join-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Why join GIUVA?</span>
            <h2 id="why-join-title" className="section-title mt-5">Real change starts with people.</h2>
            <p className="section-text">When you join GIUVA, you become part of a community that listens, learns and acts together.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="card interactive-card p-6">
                  <Icon className="text-[#16825d]" size={30} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black text-[#081f3a]">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paths" className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="paths-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">How to get involved</span>
            <h2 id="paths-title" className="section-title mt-5">Choose the path that fits you best.</h2>
            <p className="section-text">You can volunteer, become a partner or help more people discover GIUVA.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="card p-7 md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#16825d] text-white"><Sprout size={30} aria-hidden="true" /></div>
              <h3 className="mt-6 text-3xl font-black text-[#081f3a]">Become a volunteer</h3>
              <p className="mt-4 leading-7 text-slate-600">Whether you have a few hours or a few days, your contribution matters. No experience is needed, only a willingness to help.</p>
              <div className="mt-6 grid gap-3">
                {volunteerOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div key={option.title} className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-3 font-black text-[#081f3a]"><Icon className="text-[#1f5fbf]" size={20} aria-hidden="true" />{option.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{option.text}</p>
                    </div>
                  );
                })}
              </div>
              <Link href="#contact" className="btn btn-primary mt-6 w-full">Sign Up as a Volunteer <ArrowRight size={17} aria-hidden="true" /></Link>
            </article>

            <article className="card p-7 md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f5fbf] text-white"><HandHeart size={30} aria-hidden="true" /></div>
              <h3 className="mt-6 text-3xl font-black text-[#081f3a]">Become a partner</h3>
              <p className="mt-4 leading-7 text-slate-600">If your organisation shares GIUVA values, we can build useful bridges for community participation and social impact.</p>
              <div className="mt-6 grid gap-3">
                {partnerTypes.map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 font-black text-[#081f3a]"><Icon className="text-[#16825d]" size={20} aria-hidden="true" />{item.title}</div>;
                })}
              </div>
              <Link href="/partners" className="btn btn-blue mt-6 w-full">Become a Partner <ArrowRight size={17} aria-hidden="true" /></Link>
            </article>

            <article className="card p-7 md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f97316] text-white"><Megaphone size={30} aria-hidden="true" /></div>
              <h3 className="mt-6 text-3xl font-black text-[#081f3a]">Spread the word</h3>
              <p className="mt-4 leading-7 text-slate-600">If you cannot volunteer right now, you can still help by inviting others, sharing GIUVA updates and talking about GIUVA in your community.</p>
              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <strong className="text-[#081f3a]">Every share matters. Every voice counts.</strong>
                <p className="mt-3 leading-7 text-slate-600">Follow GIUVA, share community stories and help new people discover where they belong.</p>
              </div>
              <Link href="/contact" className="btn btn-ghost mt-6 w-full">Contact GIUVA <ArrowRight size={17} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="next-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">What happens next?</span>
            <h2 id="next-title" className="section-title mt-5">A simple journey into the community.</h2>
            <p className="section-text">GIUVA listens first, then connects you with the people, projects and countries that fit your interests.</p>
          </div>
          <div className="grid gap-4">
            {nextSteps.map((step, index) => (
              <article key={step} className="card flex items-center gap-5 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#081f3a] text-lg font-black text-white">{index + 1}</span>
                <p className="text-lg font-black leading-7 text-[#081f3a]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="card p-7 md:p-8">
            <span className="eyebrow">Get in touch</span>
            <h2 id="contact-title" className="mt-5 text-3xl font-black leading-tight text-[#081f3a]">Tell us how you want to take part.</h2>
            <p className="mt-4 leading-7 text-slate-600">Fill in the form and GIUVA Europe will get back to you. You can also email us directly at <a className="font-black text-[#1f5fbf]" href={`mailto:${europeBrand.email}`}>{europeBrand.email}</a>.</p>
            <div className="mt-6 rounded-xl bg-white p-5 text-sm leading-6 text-slate-600">
              <strong className="block text-[#081f3a]">Interests you can mention</strong>
              <span className="mt-2 block">Volunteering, partnership, spreading the word, projects, countries or another GIUVA-related idea.</span>
            </div>
          </aside>
          <EuropeContactForm fields={europeContactFields} submitLabel="Start Your Journey" successMessage="Thank you. Your community request has been validated locally and is ready for future GIUVA Europe secretariat integration.">
            <label>
              <span className="field-label">Interest *</span>
              <input className="field" name="interest" required placeholder="Volunteering, partnership, spreading the word or other" />
            </label>
            <label>
              <span className="field-label">Message *</span>
              <textarea className="field min-h-36" name="message" required />
            </label>
          </EuropeContactForm>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="countries-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Find GIUVA in your country</span>
            <h2 id="countries-title" className="section-title mt-5">GIUVA is growing across Europe.</h2>
            <p className="section-text">If you cannot find your country, contact GIUVA Europe and help start a new community.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {europeCountries.map((country) => (
              <article key={country.name} className="card interactive-card p-6">
                <h3 className="text-2xl font-black text-[#081f3a]">{country.name}</h3>
                <p className="mt-3 font-bold text-[#16825d]">{country.status}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">{country.year}</p>
                {country.href !== "#" ? <a href={country.href} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1f5fbf]">Visit website <ArrowRight size={15} aria-hidden="true" /></a> : <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1f5fbf]">Contact GIUVA <ArrowRight size={15} aria-hidden="true" /></Link>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
