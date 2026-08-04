import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 w-full max-w-6xl items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 overflow-hidden">
            <Image
              src="/Kerem_Turer_shot.jpeg"
              alt="Kerem Turer — AI Creative Director"
              fill
              className="object-cover grayscale contrast-110"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 md:gap-6 text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              AI Creative Director · Tonmeister
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Kerem Turer
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
              Bridging AI and cinematic aesthetics.
              <br />
              25+ years of sound, image and storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 md:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Selected Work
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-100">
              Cinematic Brand Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Project 1 */}
            <article className="group flex flex-col gap-4">
              <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Gm7gy8_276M?controls=0&rel=0&modestbranding=1"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project LuxHertz"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Project LuxHertz
                </h3>
                <p className="text-xs text-neutral-500 tracking-wide">
                  Art Direction & AI
                </p>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group flex flex-col gap-4">
              <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/l27aeWB48QU?controls=0&rel=0&modestbranding=1"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Aelia"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Project Aelia
                </h3>
                <p className="text-xs text-neutral-500 tracking-wide">
                  Concept & Execution
                </p>
              </div>
            </article>

            {/* Project 3 */}
            <article className="group flex flex-col gap-4">
              <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/UJk3mAY8Ywk?controls=0&rel=0&modestbranding=1"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Ioni Dental"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Project Ioni Dental
                </h3>
                <p className="text-xs text-neutral-500 tracking-wide">
                  Brand Identity
                </p>
              </div>
            </article>

            {/* Project 4 */}
            <article className="group flex flex-col gap-4">
              <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/IvRoxI5jHIU?controls=0&rel=0&modestbranding=1"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Lumiere"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  Project Lumiere
                </h3>
                <p className="text-xs text-neutral-500 tracking-wide">
                  AI Visuals
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 md:py-28 px-6 border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Get in touch
          </p>
          <a
            href="mailto:info@keremturer.com"
            className="text-base md:text-lg text-neutral-300 hover:text-white transition-colors duration-300 tracking-wide"
          >
            info@keremturer.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-neutral-600 tracking-wide">
          <span>© {new Date().getFullYear()} Kerem Turer</span>
          <span>Oanki Studio</span>
        </div>
      </footer>
    </main>
  );
}
