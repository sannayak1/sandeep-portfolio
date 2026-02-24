export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          🚀 Projects
        </p>
        <h1 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Enterprise Cloud Modernization &amp; Platform Engineering
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          A selection of initiatives spanning Azure cloud migration,
          event-driven microservices, and generative AI–driven legacy
          transformation.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Enterprise Cloud Modernization Platform
          </h2>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Azure · AKS · CI/CD · DR Strategy
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Led migration of 20+ enterprise applications to Azure.</li>
            <li>Designed AKS-based container orchestration platform.</li>
            <li>Implemented secure CI/CD pipelines.</li>
            <li>
              Designed DR strategy with defined RTO/RPO objectives.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Event-Driven Microservices Architecture
          </h2>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Spring Boot · Kafka · Kubernetes · Observability
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Designed and implemented 45 Spring Boot microservices.</li>
            <li>Built Kafka-based event streaming architecture.</li>
            <li>Implemented Kubernetes-based orchestration.</li>
            <li>
              Established centralized monitoring using ELK, Prometheus, and
              Grafana.
            </li>
          </ul>
        </section>

        <section className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/40">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Generative AI for Legacy Transformation
          </h2>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            OpenAI APIs · Legacy Code Analysis · Modernization
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>
              Utilized OpenAI APIs for legacy code analysis and documentation
              extraction.
            </li>
            <li>Assisted in automated refactoring strategies.</li>
            <li>
              Applied AI-driven modernization approaches for enterprise systems.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

