export default function Home() {
  return (
    <div className="space-y-12">
      <section className="pro-panel rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40 ring-1 ring-sky-500/10 backdrop-blur sm:p-10">
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

      <section className="pro-panel rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
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
              70<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Event-driven, domain-aligned services running in production.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900">
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Apps Migrated to Azure &amp; OpenShift
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-sky-300">
              100<span className="align-top text-sm">+</span>
            </dd>
            <p className="mt-1 text-xs text-slate-400">
              Legacy applications transformed into Azure- and OpenShift-native
              solutions.
            </p>
          </div>
        </dl>
      </section>

      <section className="pro-panel rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              📝 Blog
            </h2>
            <p className="mt-3 text-base font-semibold text-slate-50">
              Executive insights from 20+ years of engineering leadership,
              enterprise architecture, and cloud transformation.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Through my blog, I share practical lessons drawn from two decades
              of leading large-scale modernization programs, architecting
              resilient distributed systems, and guiding engineering teams
              through complex enterprise transformations.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              My writing focuses not just on technology, but on the intersection
              of:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
              <li>Architecture and business strategy</li>
              <li>Scalability and governance</li>
              <li>Engineering excellence and organizational maturity</li>
              <li>Innovation and operational discipline</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              These are battle-tested insights from real-world programs, not
              theoretical frameworks.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                Lessons from 20+ Years in Enterprise Software Engineering
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                A reflection on the evolution from monolithic systems to
                cloud-native, event-driven architectures.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                I explore:
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Architectural decision-making across technology generations</li>
                <li>Trade-offs between speed, scale, and maintainability</li>
                <li>Modernizing legacy estates without disrupting business continuity</li>
                <li>Aligning technical roadmaps with executive vision</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                This is about engineering longevity: building systems that
                survive multiple technology waves.
              </p>
            </details>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                Designing High-Availability Systems in Azure
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                Patterns and practices for building enterprise-grade resilience
                on Microsoft Azure.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Regional redundancy and cross-region failover strategies</li>
                <li>Designing for strict RTO/RPO objectives</li>
                <li>Platform-native services for reliability with a PaaS-first mindset</li>
                <li>Eliminating single points of failure across microservices ecosystems</li>
                <li>Observability-driven reliability engineering</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                This is resilience engineered intentionally, not reactively.
              </p>
            </details>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                Building and Scaling 45 Microservices in Production
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                Lessons from designing and governing large-scale event-driven
                ecosystems.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Domain-driven service boundaries</li>
                <li>Event versioning and backward compatibility</li>
                <li>API governance and schema evolution</li>
                <li>Observability, tracing, and production diagnostics</li>
                <li>Avoiding distributed monolith anti-patterns</li>
                <li>Scaling teams alongside technical architecture</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                Scaling microservices is not about count; it is about disciplined
                architecture.
              </p>
            </details>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                How Generative AI is Changing Legacy Modernization
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                Applying AI to accelerate transformation of complex enterprise
                estates.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Automated code comprehension and documentation</li>
                <li>AI-assisted impact analysis</li>
                <li>Migration playbook generation</li>
                <li>Legacy-to-cloud refactoring acceleration</li>
                <li>Governance guardrails for enterprise AI adoption</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                Generative AI is not just productivity tooling; it is a
                strategic accelerator for modernization programs.
              </p>
            </details>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                Blue-Green Deployment Strategies in Event-Driven Architectures
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                Designing safe rollout strategies in distributed systems where
                events outlive deployments.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Zero-downtime deployment techniques</li>
                <li>Schema compatibility across versions</li>
                <li>Consumer-driven contract testing</li>
                <li>Managing Kafka and event stream evolution</li>
                <li>Safe rollback strategies in asynchronous systems</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                Deployment strategy is architecture strategy.
              </p>
            </details>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-900/40">
            <details className="blog-details space-y-1">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-50 group-hover:text-sky-200">
                Disaster Recovery Testing in Large-Scale Enterprise Systems
                <span
                  aria-hidden
                  className="summary-chevron ml-2 text-xs text-slate-500"
                >
                  ▶
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">
                Moving from documented DR plans to proven operational readiness.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] text-slate-300">
                <li>Designing meaningful DR simulations</li>
                <li>Cross-region failover orchestration</li>
                <li>Data replication and integrity validation</li>
                <li>Business continuity validation beyond infrastructure</li>
                <li>Post-DR learning loops and architecture refinement</li>
              </ul>
              <p className="mt-2 text-xs text-slate-400">
                True resilience is measured in execution, not documentation.
              </p>
            </details>
          </article>
        </div>
      </section>
    </div>
  );
}
