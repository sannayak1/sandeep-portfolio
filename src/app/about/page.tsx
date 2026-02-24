import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/40 sm:p-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          👨‍💻 About
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Professional Overview
        </h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
        <section className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          <p>
            With over two decades of experience in the IT services industry, I
            have evolved from a hands-on software engineer to a technical
            architect and engineering manager leading large-scale modernization
            initiatives. I work closely with senior stakeholders, product teams,
            and delivery organizations to translate business outcomes into
            resilient, cloud-native architectures.
          </p>
          <p>My work focuses on:</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200 sm:text-base">
            <li>Cloud-native transformation using Microsoft Azure</li>
            <li>Event-driven and domain-driven microservices architectures</li>
            <li>High-availability and disaster recovery engineering</li>
            <li>DevSecOps-driven CI/CD implementation</li>
            <li>Generative AI adoption for legacy modernization</li>
          </ul>
          <p>
            I bring a balance of deep technical depth and engineering
            leadership, ensuring that architecture decisions support long-term
            scalability, security, and operational excellence while staying
            pragmatic about delivery constraints.
          </p>

          <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Leadership &amp; Delivery
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300 sm:text-sm">
                <li>Led cross-functional teams of 150+ engineers.</li>
                <li>
                  Partnered with business and product leaders on multi-year
                  transformation roadmaps.
                </li>
                <li>
                  Established engineering standards, governance, and platform
                  guardrails.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Technical Focus
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300 sm:text-sm">
                <li>Azure-native architectures leveraging AKS, PaaS, and serverless.</li>
                <li>
                  Event-driven systems using messaging, streaming, and CQRS patterns.
                </li>
                <li>
                  Observability-first design with logging, metrics, and tracing.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-950/60">
            <Image
              src="/profile-sandeep.png"
              alt="Portrait"
              width={640}
              height={480}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 text-xs text-slate-300 sm:text-sm">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
              How I Work
            </h2>
            <p className="mt-2">
              I enjoy operating at the intersection of architecture and
              engineering execution—aligning roadmaps, coaching teams, and
              ensuring that modernization investments translate into measurable
              business impact.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}


