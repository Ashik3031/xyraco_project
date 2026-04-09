import Link from "next/link";

const ongoingProjects = [
  {
    name: "Nova Pay",
    description: "A modern payments engine for SaaS and subscription brands.",
    status: "Building",
    timeline: "Started Feb 2026",
  },
  {
    name: "Pulse CRM",
    description: "AI-native customer workflows for high-growth teams.",
    status: "In Progress",
    timeline: "Started Mar 2026",
  },
  {
    name: "LaunchPad",
    description: "A founder dashboard for launching lean digital products faster.",
    status: "MVP",
    timeline: "Started Apr 2026",
  },
];

const upcomingProjects = [
  {
    name: "Atlas AI",
    concept: "Smart business intelligence built for product teams.",
    status: "Starting Soon",
  },
  {
    name: "Aura Health",
    concept: "Wellness subscription tools powered by predictive analytics.",
    status: "Planning",
  },
  {
    name: "Brand Studio",
    concept: "A visual branding system for tomorrow’s digital companies.",
    status: "Planning",
  },
];

const completedProjects = [
  {
    name: "Serein",
    description: "A launched marketplace for curated B2B services.",
    liveUrl: "https://www.serein.example",
    status: "Live",
  },
  {
    name: "Kara",
    description: "A conversion-first design system for enterprise teams.",
    liveUrl: "https://www.kara.example",
    status: "Completed",
  },
];

const statusStyles: Record<string, string> = {
  Building: "bg-amber-50 text-amber-700 border border-amber-100",
  "In Progress": "bg-amber-50 text-amber-700 border border-amber-100",
  MVP: "bg-amber-50 text-amber-700 border border-amber-100",
  "Starting Soon": "bg-sky-50 text-sky-700 border border-sky-100",
  Planning: "bg-sky-50 text-sky-700 border border-sky-100",
  Live: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Completed: "bg-emerald-50 text-emerald-700 border border-emerald-100",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#fcfdfa] text-[#0a0a0a] selection:bg-accent selection:text-white">
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl rounded-[40px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-10 lg:p-14">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
              Studio Projects
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Real products. Built from ideas.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We’re actively building and launching real projects. Here’s what we’re working on.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/apply"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-slate-800 sm:w-auto"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Ongoing Projects</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] sm:text-5xl">
            Projects currently in development
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            These are the products our studio is actively building, testing, and launching with premium execution.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ongoingProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-6 rounded-[28px] bg-slate-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Studio Build</p>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-950">{project.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                    {project.timeline}
                  </span>
                </div>
              </div>
              <p className="text-base leading-7 text-slate-600">{project.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Upcoming Projects</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] sm:text-5xl">
            Projects planned and starting soon
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            A curated pipeline of high-potential concepts that will move into active development soon.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {upcomingProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.concept}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Completed Projects</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] sm:text-5xl">
            Projects we’ve successfully built and launched
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Real launches with polished product experiences, live audiences, and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {completedProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="mb-6 rounded-[28px] bg-slate-100 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Launched</p>
                    <h3 className="mt-5 text-3xl font-semibold text-slate-950">{project.name}</h3>
                  </div>
                  <p className="text-base leading-7 text-slate-600">{project.description}</p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-fit items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-slate-100"
                >
                  View Live
                </a>
              </div>
              <div className="mt-8 flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-[36px] border border-slate-200 bg-[#fafafa] p-10 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:text-left">
              <div className="max-w-2xl text-center lg:text-left">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Got an idea?</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0a0a0a] sm:text-5xl">
                  Let’s build it together.
                </h2>
              </div>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-slate-900"
              >
                Start Your Startup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
