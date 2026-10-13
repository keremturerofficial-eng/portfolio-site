import VideoEmbed from "@/components/VideoEmbed";

export default function SpecialProjects() {
  return (
    <main className="min-h-screen flex flex-col bg-black pt-32">
      <section className="py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light mb-16 tracking-wide text-gray-200">Special Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Arctic Leviathan */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="ztKb8-L07go"
                  title="Project Arctic Leviathan"
                  poster="/thumbnails/Arctic_Leviathan.jpeg"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Arctic Leviathan</p>
            </div>

            {/* Life Engine white paper */}
            <div className="flex flex-col gap-4">
              <a
                href="https://drive.google.com/file/d/1X6hlMpMXyFORXbYIpx8Rp4gZvj-SQphi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-video w-full bg-white/5 relative flex items-center justify-center border border-white/10 hover:border-white/40 transition-colors duration-300"
              >
                <span className="px-6 text-center text-lg md:text-xl font-light tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white">
                  Life Engine <br /> Project White Paper
                </span>
              </a>
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                Life Engine &mdash; Project White Paper (PDF)
              </p>
            </div>

            {/* Aegris-Micro Deep Tech Pitch Deck */}
            <div className="flex flex-col gap-4">
              <a
                href="https://drive.google.com/file/d/1GdblhnBV_IRQCkrl4I-2W7-RweegYTc8/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-video w-full bg-white/5 relative flex items-center justify-center border border-white/10 hover:border-white/40 transition-colors duration-300"
              >
                <span className="px-6 text-center text-lg md:text-xl font-light tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white">
                  Aegris-Micro <br /> Deep Tech Pitch Deck
                </span>
              </a>
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                Aegris-Micro &mdash; Deep Tech Pitch Deck (PDF)
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* İLETİŞİM BÖLÜMÜ */}
      <section className="min-h-[40vh] flex items-center justify-center border-t border-white/10 mt-16">
        <a
          href="mailto:info@keremturer.com"
          className="text-3xl md:text-5xl font-bold tracking-tighter text-white/50 hover:text-white transition-colors duration-500"
        >
          info@keremturer.com
        </a>
      </section>
    </main>
  );
}
