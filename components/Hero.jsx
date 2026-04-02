import Image from "next/image";
import { heroBio } from "@/data/content";
import { contact } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24 py-24">

        {/* ── Photo ── */}
        <div className="relative flex-shrink-0">
          <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 3px rgba(255,255,255,0.6), 0 0 20px 6px rgba(255,255,255,0.3), 0 0 50px 15px rgba(255,255,255,0.12), 0 0 80px 30px rgba(0,0,0,0.8)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Eugene Vher I. Rangcapan"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col text-center md:text-left">

          {/* Name — first part white, last name purple→pink gradient */}
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-3 leading-tight">
            <span className="text-white">Eugene Vher I. </span>
            <span className="text-white">
              Rangcapan
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-mono text-lg text-accent mb-6">
            &gt; Full Stack Developer
          </p>

          {/* Bio */}
          <p className="text-accent leading-relaxed mb-8 max-w-md">
            {heroBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="font-mono text-sm bg-white text-background px-6 py-3 rounded hover:bg-accent transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-accent border border-white/20 px-6 py-3 rounded hover:border-white/50 hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 justify-center md:justify-start">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-accent hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
