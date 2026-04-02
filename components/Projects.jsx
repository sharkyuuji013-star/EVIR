import { projects } from "@/data/content";

function ConfidentialPlaceholder() {
  return (
    <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface border border-white/10 flex items-center justify-center mb-5">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* Confidential box */}
      <div className="relative flex flex-col items-center justify-center gap-2 bg-background/70 border border-white/10 rounded-lg px-8 py-5">
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="font-mono text-xs tracking-widest text-white/30 uppercase">
          Confidential
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 scroll-mt-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-accent mb-3">// Projects</p>
        <h2 className="font-serif text-4xl font-bold text-white mb-12">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-white/10 rounded-xl p-6 hover:border-white/25 transition-colors cursor-pointer"
            >
              <ConfidentialPlaceholder />
              <h3 className="font-serif text-lg font-bold text-white mb-3">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-accent bg-background border border-white/10 rounded-full px-3 py-1">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
