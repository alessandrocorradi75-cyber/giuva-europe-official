import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Bot,
  ClipboardList,
  Coffee,
  Compass,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
  Wrench
} from "lucide-react";
import { europeBrand, europeCountries, europeProgrammes } from "@/data/europa";

export const metadata: Metadata = {
  title: "GIUVA Europe | Not an Organisation. A Community.",
  description:
    "GIUVA Europe is a European community where people meet, ideas become projects and communities grow stronger together.",
  openGraph: {
    title: "GIUVA Europe | Not an Organisation. A Community.",
    description:
      "A European community connecting people, projects, volunteering opportunities and national GIUVA organisations across Europe.",
    images: ["/brand/giuva-europe-community-platform.png"]
  }
};

const stories = [
  {
    name: "Maria",
    text: "She came for a coffee. Today she coordinates a Community & Social project.",
    accent: "#16825d"
  },
  {
    name: "Andrei",
    text: "He came because he loves motorcycles. Today he volunteers with Riders Rescue.",
    accent: "#0b2a4a"
  },
  {
    name: "Luca",
    text: "He had an idea. Today that idea became a GIUVA project.",
    accent: "#0891b2"
  },
  {
    name: "Elena",
    text: "She simply wanted to help. Today she supports her community through Community & Social.",
    accent: "#18865b"
  },
  {
    name: "Anna",
    text: "She wanted to travel. Today she connects people across Europe through Journey.",
    accent: "#2f7d32"
  },
  {
    name: "Marco",
    text: "He wanted to teach. Today he trains future volunteers through GIUVA Academy.",
    accent: "#7c3aed"
  }
];

const projectSteps = [
  { label: "Meet", icon: Users },
  { label: "Coffee", icon: Coffee },
  { label: "Idea", icon: Lightbulb },
  { label: "Development", icon: Wrench },
  { label: "Community", icon: Users },
  { label: "Partners", icon: HandHeart },
  { label: "Project", icon: ClipboardList },
  { label: "Impact", icon: Heart }
];

const disciplineIcons: Record<string, typeof Users> = {
  "community-social": Users,
  "riders-rescue": Bike,
  "civil-support": HandHeart,
  preparedness: ShieldCheck,
  journey: Compass,
  "project-pulse": Target,
  academy: GraduationCap,
  youth: Leaf,
  senior: HeartPulse
};

const partners = [
  "Institutional partners",
  "Educational partners",
  "Corporate partners",
  "Community partners"
];

const transparencyLinks = ["Governance", "Policies", "GDPR", "Reports", "Standards", "Documents"];

export default function EuropeHomePage() {
  const visibleProgrammes = europeProgrammes.filter((programme) => Object.hasOwn(disciplineIcons, programme.slug));

  return (
    <>
      <section className="eu-standard-hero" aria-labelledby="home-hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src="/brand/giuva-europe-community-platform.png" alt="" />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">GIUVA Europe</p>
          <h1 id="home-hero-title">NOT AN ORGANISATION.<br /><span>A COMMUNITY.</span></h1>
          <p className="hero-subtitle">People meet.<br />Ideas become projects.<br />Communities grow stronger together.<br />GIUVA connects people across Europe.</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link href="/about" className="btn btn-blue">Discover GIUVA</Link>
            <Link href="/community" className="btn btn-light">Join the Community</Link>
          </div>
          <p className="hero-bottom"><Heart size={18} aria-hidden="true" /> Everyone has something to offer.</p>
        </div>
      </section>

      <section className="people-section" aria-labelledby="coffee-title">
        <div className="section-heading centered">
          <p className="eyebrow">Stories before explanations</p>
          <h2 id="coffee-title">Everything can start with a coffee.</h2>
          <p>Representative journeys showing how people can find their place inside GIUVA.</p>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article className="story-card" key={story.name}>
              <div className="story-portraits" style={{ "--story-accent": story.accent } as React.CSSProperties}>
                <div><span>{story.name[0]}</span><small>Before</small></div>
                <ArrowRight size={22} aria-hidden="true" />
                <div><span>{story.name[0]}</span><small>GIUVA</small></div>
              </div>
              <h3>{story.name}</h3>
              <p>{story.text}</p>
              <Link href={`/community#story-${index + 1}`}>Discover the Story <ArrowRight size={14} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-band" aria-labelledby="timeline-title">
        <h2 id="timeline-title">How a GIUVA project is born</h2>
        <div className="project-timeline">
          {projectSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="timeline-item" key={step.label}>
                <Icon size={34} aria-hidden="true" />
                <span>{step.label}</span>
                {index < projectSteps.length - 1 ? <ArrowRight className="timeline-arrow" size={22} aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="people-section compact" aria-labelledby="place-title">
        <div className="section-heading centered">
          <h2 id="place-title">Find your place. Choose your way to make an impact.</h2>
        </div>
        <div className="discipline-strip">
          {visibleProgrammes.map((programme) => {
            const Icon = disciplineIcons[programme.slug];
            return (
              <Link className="discipline-tile" href={`/programmes#${programme.slug}`} key={programme.slug}>
                <span className="discipline-icon" style={{ backgroundColor: programme.accent.replace("bg-[", "").replace("]", "") }}><Icon size={30} aria-hidden="true" /></span>
                <strong>{programme.name}</strong>
                <small>Discover <ArrowRight size={13} aria-hidden="true" /></small>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-feature-grid" aria-label="Network, AI volunteer and support">
        <article className="feature-panel map-panel">
          <p className="eyebrow">European network</p>
          <h2>A network across Europe</h2>
          <p>One vision. Many communities. Stronger together.</p>
          <div className="country-list">
            {europeCountries.map((country) => <span key={country.name}>{country.name.replace("GIUVA ", "")}</span>)}
          </div>
          <Link href="/countries" className="btn btn-blue">Explore the Network <ArrowRight size={16} aria-hidden="true" /></Link>
        </article>

        <article className="feature-panel ai-panel">
          <div>
            <p className="eyebrow">Digital welcome</p>
            <h2>The AI Volunteer</h2>
            <p>I am here to help you discover GIUVA, our projects, opportunities and how you can get involved.</p>
            <div className="question-chips" aria-label="Example GIUVA questions">
              <span>What is GIUVA?</span>
              <span>How can I volunteer?</span>
              <span>Which projects exist?</span>
              <span>How can I support GIUVA?</span>
            </div>
          </div>
          <div className="ai-avatar" aria-hidden="true"><Bot size={62} /></div>
        </article>

        <article className="feature-panel support-panel">
          <p className="eyebrow">Support GIUVA</p>
          <h2>Support GIUVA</h2>
          <p>GIUVA Europe does not currently receive direct donations. You can support GIUVA through the national organisation of your choice.</p>
          <Link href="/countries" className="btn btn-blue">Choose your country <ArrowRight size={16} aria-hidden="true" /></Link>
        </article>
      </section>

      <section className="partners-section" aria-labelledby="partners-title">
        <div className="section-heading centered">
          <h2 id="partners-title">Together with our partners</h2>
          <p>Only confirmed partnerships should be displayed publicly. This homepage keeps partner categories clear.</p>
        </div>
        <div className="partner-row">
          {partners.map((partner) => <Link href="/partners" key={partner}>{partner}</Link>)}
        </div>
      </section>

      <section className="transparency-band" aria-labelledby="transparency-title">
        <div>
          <p className="eyebrow">Trust and standards</p>
          <h2 id="transparency-title">Transparent, accessible and European by design.</h2>
          <p>{europeBrand.description}</p>
        </div>
        <div className="transparency-links">
          {transparencyLinks.map((item) => <Link href="/transparency" key={item}>{item}</Link>)}
        </div>
      </section>

      <details className="ai-volunteer-widget">
        <summary aria-label="Open the AI Volunteer"><MessageCircle size={24} aria-hidden="true" /></summary>
        <div>
          <h2>The AI Volunteer</h2>
          <p>I can help with GIUVA, communities, volunteering, projects, countries, partners, events, programmes and donations.</p>
          <p className="ai-safety">For anything outside GIUVA, I will politely redirect the conversation back to the community.</p>
        </div>
      </details>
    </>
  );
}
