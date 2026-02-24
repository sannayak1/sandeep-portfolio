export default function AboutPage() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          👨‍💻 About
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Professional Overview
        </h1>
      </header>

      <section className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        <p>
          With over two decades of experience in the IT services industry, I
          have evolved from a hands-on software engineer to a technical architect
          and engineering manager leading large-scale modernization initiatives.
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
          I bring a balance of deep technical expertise and engineering
          leadership, ensuring that architecture decisions align with long-term
          business scalability.
        </p>
      </section>
    </div>
  );
}

