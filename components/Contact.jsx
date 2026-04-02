"use client";

import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 scroll-mt-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-accent mb-3">// Contacts</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-accent leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Left: Form ── */}
          <form
            className="flex-1 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-white/15 rounded px-4 py-3 font-mono text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white/15 rounded px-4 py-3 font-mono text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="bg-transparent border border-white/15 rounded px-4 py-3 font-mono text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-background font-mono text-sm font-bold py-3 px-6 rounded hover:bg-accent transition-colors"
            >
              SEND
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22 11 13 2 9l20-7z" />
              </svg>
            </button>
          </form>

          {/* ── Right: Get in Touch ── */}
          <div className="lg:w-72 flex flex-col gap-6">
            <h3 className="font-mono text-lg font-semibold text-white">
              Get in Touch
            </h3>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-accent hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <span className="font-mono text-sm">{contact.email}</span>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-accent hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <span className="font-mono text-sm">GitHub: @sharkyuuji013-star</span>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-accent hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="font-mono text-sm">LinkedIn: Eugene Vher I. Rangcapan</span>
            </a>
          </div>

        </div>
      </div>

      <p className="font-mono text-xs text-white/20 text-center mt-24">
        designed &amp; built by Eugene Vher I. Rangcapan
      </p>
    </section>
  );
}
