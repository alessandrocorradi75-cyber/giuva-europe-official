import type { Metadata } from "next";
import Link from "next/link";
import { fetchDisciplines, fetchEvents, fetchProjects } from "@/lib/api/public";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Clock3,
  Globe2,
  GraduationCap,
  HandHeart,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "GIUVA Europe | Find Where You Can Make a Difference",
  description:
    "Discover meaningful ways to volunteer, participate and strengthen communities across Europe with GIUVA.",
  openGraph: {
    title: "GIUVA Europe | Find Where You Can Make a Difference",
    description:
      "From 30 minutes near home to European community projects. Find your way to make a difference.",
    images: ["/brand/giuva-europe-community-platform.png"]
  }
};

const opportunities = [
  {
    category: "Community & Social",
    title: "Build stronger communities",
    location: "Oradea, Romania",
    schedule: "Flexible",
    image: "/stories-real/ecaterina-community-social.jpg",
    href: "/community"
  },
  {
    category: "Youth",
    title: "Help young people take part",
    location: "Bucharest, Romania",
    schedule: "Community activities",
    image: "/stories-real/gabriela-youth.jpg",
    href: "/programmes"
  },
  {
    category: "Community & Social",
    title: "From seed to community",
    location: "Spoleto, Italy",
    schedule: "Local project",
    image: "/stories-real/michela-community-social.jpg",
    href: "/community"
  },
  {
    category: "Riders Rescue",
    title: "Turn passion into purpose",
    location: "Oradea, Romania",
    schedule: "Flexible",
    image: "/stories-real/marius-riders-rescue.jpg",
    href: "/programmes"
  }
];

const stories = [
  {
    name: "Gabriela",
    city: "Bucharest",
    discipline: "GIUVA Youth",
    civilian: "/stories-real/gabriela-civilian.jpg",
    uniform: "/stories-real/gabriela-youth.jpg",
    quote:
      "When young people are welcomed, communities become braver."
  },
  {
    name: "Marius",
    city: "Oradea",
    discipline: "GIUVA Riders Rescue",
    civilian: "/stories-real/marius-civilian.jpg",
    uniform: "/stories-real/marius-riders-rescue.jpg",
    quote:
      "Passion becomes purpose when it serves someone else."
  },
  {
    name: "Michela",
    city: "Spoleto",
    discipline: "GIUVA Community & Social",
    civilian: "/stories-real/michela-civilian.jpg",
    uniform: "/stories-real/michela-community-social.jpg",
    quote:
      "Community begins when we make room for people's stories."
  }
];

const participation = [
  {
    icon: Users,
    title: "I want to volunteer",
    text: "Find something meaningful that fits your time, location and interests.",
    href: "/community"
  },
  {
    icon: Sparkles,
    title: "I have a project idea",
    text: "Turn a local need or an idea into a structured community project.",
    href: "/community"
  },
  {
    icon: Building2,
    title: "We are an organisation",
    text: "Work with GIUVA through a clear and verified partnership.",
    href: "/partners"
  },
  {
    icon: GraduationCap,
    title: "We are a school",
    text: "Build youth, education and civic participation activities.",
    href: "/partners"
  },
  {
    icon: HandHeart,
    title: "We are a company",
    text: "Explore corporate volunteering, partnership and community support.",
    href: "/partners"
  },
  {
    icon: Globe2,
    title: "I want GIUVA in my city",
    text: "Discover how a GIUVA local community can grow in your territory.",
    href: "/countries"
  }
];

const steps = [
  ["01", "Discover", "Find opportunities that match your time and interests."],
  ["02", "Join", "Connect with a GIUVA community or verified partner."],
  ["03", "Participate", "Give your time, skills and energy."],
  ["04", "Learn", "Meet people and grow through real experience."],
  ["05", "Create impact", "Help make communities stronger together."]
];

export default async function EuropeHomePage() {
  const [projects, disciplines, events] = await Promise.all([
    fetchProjects("giuva.eu"),
    fetchDisciplines("giuva.eu"),
    fetchEvents("giuva.eu", { upcomingOnly: true }),
  ]);

  return (
    <div className="bg-[#f6f8fb] text-[#102033]">

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#071f3d] text-white">
        <img
          src="/brand/giuva-europe-community-platform.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,30,.94)_0%,rgba(3,15,30,.76)_42%,rgba(3,15,30,.25)_78%),linear-gradient(180deg,rgba(3,15,30,.1),rgba(3,15,30,.7))]" />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-[min(1180px,calc(100%-2rem))] flex-col justify-center py-24">

          <p className="mb-4 text-sm font-black uppercase tracking-[.18em] text-[#ffd84d]">
            GIUVA Europe
          </p>

          <h1 className="max-w-5xl text-[clamp(3.3rem,7vw,6.8rem)] font-black leading-[.92] tracking-[-.045em]">
            YOUR TIME CAN
            <span className="block text-[#ffd84d]">
              MAKE A DIFFERENCE.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(1.15rem,2vw,1.45rem)] font-semibold leading-relaxed">
            Find meaningful ways to help people and communities across Europe —
            from 30 minutes near home to long-term community projects.
          </p>

          <div className="mt-9 max-w-5xl rounded-2xl bg-white p-3 text-[#071f3d] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_.8fr_auto]">

              <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4 lg:border-b-0 lg:border-r">
                <MapPin size={21} className="shrink-0 text-blue-700" />
                <div>
                  <strong className="block text-xs">Where?</strong>
                  <span className="text-sm text-slate-500">
                    City, region or country
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4 lg:border-b-0 lg:border-r">
                <Heart size={21} className="shrink-0 text-blue-700" />
                <div>
                  <strong className="block text-xs">
                    What would you like to do?
                  </strong>
                  <span className="text-sm text-slate-500">
                    Cause or activity
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4 lg:border-b-0 lg:border-r">
                <CalendarDays size={21} className="shrink-0 text-blue-700" />
                <div>
                  <strong className="block text-xs">When?</strong>
                  <span className="text-sm text-slate-500">
                    Anytime
                  </span>
                </div>
              </div>

              <Link
                href="/community"
                className="m-1 flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#ffd02f] px-6 font-black text-[#071f3d] transition hover:bg-[#ffe06a]"
              >
                Find opportunities
                <Search size={18} />
              </Link>

            </div>
          </div>

          <div className="mt-4 flex max-w-5xl flex-wrap gap-2 text-sm font-bold">
            {[
              ["Near you", "/countries"],
              ["This weekend", "/community"],
              ["30–60 minutes", "/community"],
              ["Youth", "/programmes"],
              ["Community", "/community"],
              ["Across Europe", "/countries"]
            ].map(([label, href]) => (
              <Link
                href={href}
                key={label}
                className="rounded-full border border-white/20 bg-[#06294e]/80 px-4 py-2 transition hover:bg-white hover:text-[#071f3d]"
              >
                {label}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1180px]">

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
                Start somewhere
              </p>
              <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-tight text-[#071f3d]">
                Find your way to contribute.
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                Local action, skills-based volunteering, youth participation,
                social projects and European community experiences.
              </p>
            </div>

            <Link
              href="/community"
              className="inline-flex items-center gap-2 font-black text-blue-700"
            >
              Explore opportunities
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {opportunities.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_42px_rgba(8,31,58,.08)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-[#16825d] px-3 py-1 text-xs font-black uppercase text-white">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-black text-[#071f3d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={15} />
                    {item.location}
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <Clock3 size={15} />
                    {item.schedule}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-black text-blue-700">
                    Discover
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {projects.length > 0 && (
        <section className="bg-[#f6f8fb] px-5 py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
                  GIUVA Projects
                </p>

                <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-tight text-[#071f3d]">
                  Projects across Europe.
                </h2>

                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                  Discover public GIUVA projects currently planned or active across Europe.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-black text-blue-700"
              >
                Explore projects
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.slice(0, 6).map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_42px_rgba(8,31,58,.08)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#16825d] px-3 py-1 text-xs font-black uppercase text-white">
                      {project.featured ? "Featured" : project.status}
                    </span>

                    {project.country_code && (
                      <span className="text-xs font-black uppercase tracking-[.1em] text-slate-500">
                        {project.country_code}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-[#071f3d]">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {(project.city || project.country_code) && (
                    <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <MapPin size={16} />
                      {[project.city, project.country_code]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  )}

                  {(project.starts_at || project.ends_at) && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                      <CalendarDays size={16} />
                      {project.starts_at ?? "Open"}
                      {project.ends_at ? ` → ${project.ends_at}` : ""}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {disciplines.length > 0 && (
        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-9">
              <p className="text-xs font-black uppercase tracking-[.16em] text-[#16825d]">
                GIUVA Disciplines
              </p>

              <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-tight text-[#071f3d]">
                Different ways to make a difference.
              </h2>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                GIUVA disciplines bring together different skills, interests and forms of community participation across Europe.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {disciplines.map((discipline) => (
                <article
                  key={discipline.id}
                  className="rounded-2xl border border-slate-200 bg-[#f6f8fb] p-6 shadow-[0_12px_36px_rgba(8,31,58,.06)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#16825d] px-3 py-1 text-xs font-black uppercase text-white">
                      {discipline.featured ? "Featured" : "Discipline"}
                    </span>

                    {discipline.country_availability.length > 0 && (
                      <span className="text-xs font-black uppercase tracking-[.1em] text-slate-500">
                        {discipline.country_availability.join(" · ")}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-[#071f3d]">
                    {discipline.name}
                  </h3>

                  {discipline.description && (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {discipline.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {events.length > 0 && (
        <section className="bg-[#f6f8fb] px-5 py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-9">
              <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
                Upcoming Events
              </p>

              <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-tight text-[#071f3d]">
                Meet, participate, take action.
              </h2>

              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                Discover upcoming GIUVA events and community activities across Europe.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {events.slice(0, 6).map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(8,31,58,.06)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-black uppercase text-white">
                      {event.featured ? "Featured" : event.event_type}
                    </span>

                    {event.country_code && (
                      <span className="text-xs font-black uppercase tracking-[.1em] text-slate-500">
                        {event.country_code}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-[#071f3d]">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-5 space-y-2 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {new Date(event.starts_at).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    {(event.city || event.location) && (
                      <p className="flex items-center gap-2">
                        <MapPin size={16} />
                        {[event.location, event.city, event.country_code]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    )}

                    {event.max_participants && (
                      <p className="flex items-center gap-2">
                        <Users size={16} />
                        Up to {event.max_participants} participants
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-[1180px]">

          <div className="mb-9 text-center">
            <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
              Simple by design
            </p>

            <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black text-[#071f3d]">
              How GIUVA works
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {steps.map(([number, title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 font-black text-blue-700">
                  {number}
                </span>

                <h3 className="mt-5 text-lg font-black text-[#071f3d]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PARTICIPATION */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-[1180px]">

          <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
            More than one way to participate
          </p>

          <h2 className="mt-2 max-w-4xl text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-tight text-[#071f3d]">
            GIUVA connects people who want to help with communities that want to grow.
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {participation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group flex gap-4 rounded-2xl bg-[#071f3d] p-6 text-white transition hover:-translate-y-1"
                >
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-xl bg-[#ffd84d] text-[#071f3d]">
                    <Icon size={25} />
                  </span>

                  <div>
                    <h3 className="font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.text}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-black text-[#ffd84d]">
                      Discover
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* REAL PEOPLE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-[1180px]">

          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">
              Real people. Real communities.
            </p>

            <h2 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] font-black text-[#071f3d]">
              Volunteering starts with people.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
              Behind every uniform is an ordinary person who decided to give
              part of their time to someone else.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_42px_rgba(8,31,58,.08)]"
              >
                <div className="grid grid-cols-2">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={story.civilian}
                      alt={`${story.name} in civilian life`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#071f3d]/80 px-3 py-1 text-xs font-black uppercase text-white">
                      Everyday life
                    </span>
                  </div>

                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={story.uniform}
                      alt={`${story.name} as a GIUVA volunteer`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#16825d] px-3 py-1 text-xs font-black uppercase text-white">
                      GIUVA
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[.12em] text-[#16825d]">
                    {story.discipline} · {story.city}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-[#071f3d]">
                    {story.name}
                  </h3>

                  <p className="mt-4 text-base font-semibold leading-relaxed text-slate-600">
                    “{story.quote}”
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* EUROPE */}
      <section className="bg-[linear-gradient(135deg,#071f3d,#0c3a68)] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#ffd84d]">
              GIUVA across Europe
            </p>

            <h2 className="mt-3 text-[clamp(2.6rem,5vw,4.6rem)] font-black leading-[1]">
              One community.
              <span className="block text-[#ffd84d]">
                Many countries.
              </span>
              Local impact.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              GIUVA.EU is the common European home connecting national
              organisations, local branches, volunteers, partners and community
              opportunities through one shared identity.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 font-bold">
              {[
                "Europe",
                "Romania",
                "Italy",
                "Spain",
                "Hungary",
                "Austria"
              ].map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
                >
                  {country}
                </span>
              ))}
            </div>

            <Link
              href="/countries"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#ffd84d] px-6 font-black text-[#071f3d]"
            >
              Explore the European network
              <Globe2 size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                ShieldCheck,
                "Verified participation",
                "Clear information, safeguarding and transparent responsibilities."
              ],
              [
                Heart,
                "People first",
                "Technology supports GIUVA. People and communities remain central."
              ],
              [
                Globe2,
                "European by design",
                "Local action connected through one shared European platform."
              ],
              [
                HandHeart,
                "Partner ecosystem",
                "GIUVA, verified partners and European opportunities can coexist clearly."
              ]
            ].map(([IconValue, title, text]) => {
              const Icon = IconValue as typeof Users;

              return (
                <article
                  key={String(title)}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6"
                >
                  <Icon className="text-[#ffd84d]" size={27} />

                  <h3 className="mt-4 font-black">
                    {String(title)}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {String(text)}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">

          <HandHeart
            size={42}
            className="mx-auto text-[#16825d]"
          />

          <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-black leading-tight text-[#071f3d]">
            Everyone has something to offer.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Thirty minutes. A skill. An idea. A Saturday afternoon.
            A project. A partnership. Find your way to make a difference.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/community"
              className="inline-flex min-h-13 items-center gap-2 rounded-xl bg-[#16825d] px-7 font-black text-white"
            >
              Become a volunteer
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/partners"
              className="inline-flex min-h-13 items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 font-black text-[#071f3d]"
            >
              Become a partner
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}





