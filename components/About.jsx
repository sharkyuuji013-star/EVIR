import { bio } from "@/data/content";

const highlights = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Obsessed with readable, maintainable architecture",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Performance",
    desc: "Optimizing for speed at every layer of the stack",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Full Stack",
    desc: "From pixel-perfect UI to resilient backend systems",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: "DevOps",
    desc: "CI/CD pipelines, containerization, cloud deployment",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 8v4l3 3" />
        <path d="M9.5 14.5 7 17" />
        <path d="M14.5 14.5 17 17" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Prompt Engineer",
    desc: "Crafting precise prompts to unlock AI potential and integrate LLMs into real-world apps",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "10+", label: "Satisfied Clients" },
  { value: "99%", label: "Uptime SLA" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 scroll-mt-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* ── Left: Text + Badge + Stats ── */}
        <div className="flex-1 min-w-0">
          <p className="font-mono text-sm text-accent mb-3">// About me</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-8">
            EVIR
          </h2>
          <p className="text-accent leading-relaxed text-base mb-8">{bio}</p>

          <div className="inline-flex items-center gap-2 bg-surface border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse block" />
            <span className="font-mono text-xs text-accent">Available to work</span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-white/10 rounded-xl p-5 hover:border-white/25 transition-colors"
              >
                <p className="font-serif text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-accent uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Highlight Cards ── */}
        <div className="grid grid-cols-2 gap-4 flex-shrink-0 w-full lg:w-auto lg:max-w-sm">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-surface border border-white/10 rounded-xl p-5 flex flex-col gap-4 hover:border-white/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-background border border-white/10 flex items-center justify-center text-accent">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-accent leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
