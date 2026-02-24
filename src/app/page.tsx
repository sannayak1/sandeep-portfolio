export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40 ring-1 ring-sky-500/10 backdrop-blur sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          🏠 Home
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Engineering Leader&nbsp;| Cloud Modernization Architect&nbsp;|{" "}
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
            Generative AI in Enterprise Systems
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
          I am an Engineering Leader with over 20 years of experience designing,
          modernizing, and scaling enterprise systems across global
          organizations. My expertise spans cloud migration, microservices
          architecture, event-driven systems, and Azure-native platforms. I
          specialize in leading large engineering teams while delivering
          resilient, high-availability solutions aligned with business
          objectives.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/40"
          >
            View Projects
            <span aria-hidden>↗</span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-500/60 hover:text-sky-100"
          >
            Learn more about me
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Highlight Metrics
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          A snapshot of the scale, leadership, and modernization work I have led
          across global enterprise programs.
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Enterprise Engineering Experience
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-sky-300">
              20<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Years designing and modernizing large-scale systems.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Engineers Led
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-sky-300">
              150<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Distributed engineering teams across regions and time zones.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Microservices Designed &amp; Deployed
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-sky-300">
              45<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Event-driven, domain-aligned services running in production.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Apps Migrated to Azure
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-sky-300">
              20<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Legacy applications transformed into Azure-native solutions.
            </p>
          </div>
        </dl>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              📝 Blog
            </h2>
            <p className="mt-3 text-base font-semibold text-slate-50">
              Insights from 20+ years of engineering leadership and enterprise
              architecture.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Through my blog, I share insights from 20+ years of engineering
              leadership and enterprise architecture experience, covering cloud
              modernization, microservices design, DevSecOps, disaster recovery
              strategies, and generative AI in enterprise transformation.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-50 group-hover:text-sky-200">
              Lessons from 20+ Years in Enterprise Software Engineering
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Reflections on building, scaling, and modernizing systems across
              multiple generations of technology stacks.
            </p>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-50 group-hover:text-sky-200">
              Designing High-Availability Systems in Azure
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Patterns for resilience, failover, and DR that align with
              enterprise RTO/RPO expectations.
            </p>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-50 group-hover:text-sky-200">
              Building and Scaling 45 Microservices in Production
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Practical lessons from designing event-driven, domain-aligned
              microservices at scale.
            </p>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-50 group-hover:text-sky-200">
              How Generative AI is Changing Legacy Modernization
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Using AI to analyze, document, and accelerate transformation of
              complex legacy estates.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
