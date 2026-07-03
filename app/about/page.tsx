import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  BookOpen,
  Building2,
  CheckCircle2,
  Coffee,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Lightbulb,
  Network,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { europeBrand, europeCountries, europeProgrammes } from "@/data/europa";

export const metadata: Metadata = {
  title: "About GIUVA",
  description:
    "About GIUVA Europe: a European community in action connecting people, ideas and organisations to strengthen communities across Europe."
};

const missionPoints = [
  "Empowering citizens to become active contributors",
  "Building bridges between sectors and generations",
  "Promoting resilience and civic responsibility",
  "Fostering European collaboration and exchange"
];

const methodSteps = [
  { title: "Coffee", text: "It all starts with a conversation.", icon: Coffee },
  { title: "Idea", text: "An idea takes shape.", icon: Lightbulb },
  { title: "Development", text: "We build a plan together.", icon: Sprout },
  { title: "Community", text: "People get involved.", icon: Users },
  { title: "Partners", text: "Alliances become concrete.", icon: HandHeart },
  { title: "Project", text: "The idea becomes reality.", icon: BookOpen },
  { title: "Impact", text: "Communities grow stronger.", icon: HeartPulse }
];

const branchIcons: Record<string, typeof Users> = {
  "Community & Social": Users,
  "Riders Rescue": Bike,
  Preparedness: ShieldCheck,
  Academy: GraduationCap,
  Youth: Sprout,
  "Civil Support": HandHeart,
  Journey: Network
};

const branches = [
  {
    title: "Community & Social",
    subtitle: "Connecting people. Building stronger communities.",
    text: "We promote social inclusion, local volunteering and community development."
  },
  {
    title: "Riders Rescue",
    subtitle: "Responsible riders. Civic presence. Preparedness culture.",
    text: "We bring together motorcyclists around road safety awareness, community support and preparedness where legally appropriate."
  },
  {
    title: "Preparedness",
    subtitle: "Awareness, prevention and resilience.",
    text: "We help communities understand preparedness, AED awareness and practical civic responsibility."
  },
  {
    title: "Academy",
    subtitle: "Knowledge, skills and real impact.",
    text: "We offer learning paths, workshops and skill-building opportunities for people and communities."
  },
  {
    title: "Youth",
    subtitle: "Supporting generations. Building the future.",
    text: "We create safe participation opportunities, intergenerational connections and shared learning experiences."
  },
  {
    title: "Civil Support",
    subtitle: "Practical support for community projects.",
    text: "We provide complementary support for events, local initiatives and civic activities where appropriate."
  },
  {
    title: "Journey",
    subtitle: "European exchanges. International connections.",
    text: "We facilitate cross-border collaboration, cultural exchange and stories that connect communities."
  }
];

const values = [
  { title: "Collaboration", text: "The best solutions come from working together.", icon: HandHeart },
  { title: "Inclusivity", text: "Everyone is welcome, regardless of age, background or ability.", icon: Users },
  { title: "Innovation", text: "We embrace new ideas and creative approaches.", icon: Lightbulb },
  { title: "Resilience", text: "We help communities prepare for challenges and recover stronger.", icon: ShieldCheck },
  { title: "Impact", text: "We measure success by the positive change communities can feel.", icon: HeartPulse }
];

const standFor = [
  "Active citizenship and civic engagement",
  "The power of volunteering to transform lives",
  "Education as a tool for empowerment",
  "Collaboration across sectors and borders",
  "Sustainable communities that care for people and the planet"
];

const partnerTypes = [
  "Municipalities and local authorities",
  "Schools and universities",
  "Civic organisations and non-profits",
  "Businesses and corporate partners",
  "Health and safety stakeholders"
];

const faqs = [
  {
    question: "What does GIUVA stand for?",
    answer: "Global Initiative for Urban Volunteering & Awareness."
  },
  {
    question: "Is GIUVA a non-profit?",
    answer: "Yes. GIUVA is a European non-profit community dedicated to social impact."
  },
  {
    question: "How can I join GIUVA?",
    answer: "You can join as a volunteer, as a partner organisation or by helping more people discover GIUVA."
  },
  {
    question: "Do I need experience to volunteer?",
    answer: "No. We welcome people who want to contribute, and training or guidance can be provided where needed."
  },
  {
    question: "Where is GIUVA active?",
    answer: "GIUVA is growing across Europe, with national communities and future country development."
  },
  {
    question: "How is GIUVA funded?",
    answer: "GIUVA relies on partnerships, community support and European projects. GIUVA Europe does not currently receive direct donations."
  },
  {
    question: "Can I start a GIUVA community in my country?",
    answer: "Yes. Contact GIUVA Europe and we can explore how to start a new community responsibly."
  }
];

export default function AboutPage() {
  const featuredProgrammes = europeProgrammes.filter((programme) =>
    ["community-social", "riders-rescue", "preparedness", "academy", "youth", "civil-support", "journey"].includes(programme.slug)
  );

  return (
    <>
      <PageHero
        eyebrow="About GIUVA"
        title="Not an organisation. A community in action."
        subtitle={europeBrand.fullName}
        text="We connect people, ideas and organisations to build stronger, safer and more resilient communities across Europe."
        actions={[
          { href: "/community", label: "Join the Community", tone: "primary" },
          { href: "/projects", label: "Explore Projects", tone: "blue" }
        ]}
        visual
        imageSrc="/brand/giuva-europe-community-platform.png"
        imageAlt="GIUVA Europe community members representing a European community in action"
      />

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="who-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 id="who-title" className="section-title mt-5">A living ecosystem for European communities.</h2>
            <p className="section-text">GIUVA is a European non-profit community dedicated to strengthening communities through volunteering, education and civic engagement.</p>
            <p className="section-text">We believe that the future of Europe is built from the ground up, through real connections between people, ideas and projects.</p>
          </div>
          <article className="card border-l-4 border-l-[#16825d] p-7 md:p-8">
            <h3 className="text-3xl font-black text-[#081f3a]">Our promise</h3>
            <p className="mt-5 text-2xl font-black leading-tight text-[#16825d]">Everyone has something to offer. Every community deserves to be heard.</p>
            <p className="mt-5 leading-8 text-slate-600">We listen to what communities truly need. We connect those who want to act. We build concrete projects together.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="mission-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="card p-7 md:p-8">
            <span className="eyebrow">Our mission</span>
            <h2 id="mission-title" className="mt-5 text-4xl font-black leading-tight text-[#081f3a]">Connect people, strengthen communities and create lasting social impact.</h2>
            <div className="mt-6 grid gap-3">
              {missionPoints.map((point) => <p key={point} className="flex gap-3 rounded-xl bg-white p-4 font-black text-[#081f3a]"><CheckCircle2 className="shrink-0 text-[#16825d]" size={22} aria-hidden="true" />{point}</p>)}
            </div>
          </article>
          <article className="card p-7 md:p-8">
            <span className="eyebrow">Our vision</span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-[#081f3a]">A Europe where every community is resilient, inclusive and connected.</h2>
            <p className="section-text">Where every person has a place to contribute. Where every voice is heard. Where every neighbourhood is stronger because people work together.</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="method-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Our method</span>
            <h2 id="method-title" className="section-title mt-5">From coffee to impact.</h2>
            <p className="section-text">Every GIUVA project follows the same human journey. This is how conversations become action.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-7">
            {methodSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="card interactive-card p-5">
                  <Icon className="text-[#1f5fbf]" size={28} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black text-[#081f3a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="branches-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Operational branches</span>
            <h2 id="branches-title" className="section-title mt-5">Interconnected areas for specific community needs.</h2>
            <p className="section-text">Each branch has its own focus while remaining part of one European community vision.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {branches.map((branch) => {
              const Icon = branchIcons[branch.title] ?? Users;
              const programme = featuredProgrammes.find((item) => item.name.includes(branch.title) || branch.title.includes(item.name));
              return (
                <article key={branch.title} className="card interactive-card p-6">
                  <Icon className="text-[#16825d]" size={30} aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-black text-[#081f3a]">{branch.title}</h3>
                  <p className="mt-2 font-black text-[#1f5fbf]">{branch.subtitle}</p>
                  <p className="mt-3 leading-7 text-slate-600">{branch.text}</p>
                  {programme ? <Link href={`/programmes#${programme.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#16825d]">Discover <ArrowRight size={15} aria-hidden="true" /></Link> : null}
                </article>
              );
            })}
          </div>
          <Link href="/projects" className="btn btn-blue mt-8">Learn more about our projects <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="values-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Our values</span>
            <h2 id="values-title" className="section-title mt-5">The principles that guide everything we do.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="card p-6">
                    <Icon className="text-[#1f5fbf]" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-black text-[#081f3a]">{value.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="card p-7 md:p-8">
            <h3 className="text-3xl font-black text-[#081f3a]">What we stand for</h3>
            <div className="mt-6 grid gap-3">
              {standFor.map((item) => <p key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 font-bold leading-6 text-slate-700"><CheckCircle2 className="shrink-0 text-[#16825d]" size={21} aria-hidden="true" />{item}</p>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="operate-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Where we operate</span>
            <h2 id="operate-title" className="section-title mt-5">Our community is European. Our impact is local.</h2>
            <p className="section-text">GIUVA is active and growing across Europe, with national communities and future country development.</p>
            <p className="section-text">Want to bring GIUVA to your country? Contact us and help start a new community.</p>
            <Link href="/contact" className="btn btn-primary mt-6">Contact GIUVA Europe <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {europeCountries.map((country) => (
              <article key={country.name} className="card p-6">
                <h3 className="text-2xl font-black text-[#081f3a]">{country.name}</h3>
                <p className="mt-3 font-bold text-[#16825d]">{country.status}</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">{country.year}</p>
                {country.href !== "#" ? <a href={country.href} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1f5fbf]">Visit website <ArrowRight size={15} aria-hidden="true" /></a> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="partners-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Our partners</span>
            <h2 id="partners-title" className="section-title mt-5">Together, we build connected communities.</h2>
            <p className="section-text">We work with organisations that share GIUVA values and want to support resilient, inclusive and connected communities.</p>
            <Link href="/partners" className="btn btn-blue mt-6">Become a Partner <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partnerTypes.map((partner) => <article key={partner} className="card flex items-center gap-3 p-5 font-black text-[#081f3a]"><Building2 className="shrink-0 text-[#16825d]" size={22} aria-hidden="true" />{partner}</article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-18 md:py-20" aria-labelledby="story-title">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">Our story</span>
          <h2 id="story-title" className="section-title mt-5">Real change happens when people come together.</h2>
          <div className="card mt-10 p-7 md:p-9">
            <p className="text-lg leading-8 text-slate-700">GIUVA was born from a simple idea: real change happens when people meet, listen and decide to act together.</p>
            <p className="mt-5 text-lg leading-8 text-slate-700">In 2026, citizens, volunteers and community leaders began turning conversations into projects, partnerships and a European community of people who want to be useful.</p>
            <p className="mt-5 text-2xl font-black leading-tight text-[#081f3a]">This is our story, and it is still being written.</p>
            <Link href="/community" className="btn btn-primary mt-7">Join the Journey <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto max-w-5xl">
          <span className="eyebrow">Frequently asked questions</span>
          <h2 id="faq-title" className="section-title mt-5">Questions people ask about GIUVA.</h2>
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card p-5">
                <summary className="cursor-pointer text-lg font-black text-[#081f3a]">{faq.question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/contact" className="btn btn-blue mt-8">Contact us for more information <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="navy-band px-5 py-18 md:py-20" aria-labelledby="cta-title">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <span className="eyebrow bg-white/10 text-white">Join the movement</span>
            <h2 id="cta-title" className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Every person has something to offer.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">Every community deserves to be heard. Together, we can build a stronger Europe.</p>
          </div>
          <div className="card bg-white p-7 md:p-8">
            <h3 className="text-2xl font-black text-[#081f3a]">Are you ready to make a difference?</h3>
            <div className="mt-6 grid gap-3">
              <Link href="/community" className="btn btn-primary w-full">Join the Community</Link>
              <Link href="/partners" className="btn btn-blue w-full">Become a Partner</Link>
              <Link href="/contact" className="btn btn-ghost w-full">Contact GIUVA</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}