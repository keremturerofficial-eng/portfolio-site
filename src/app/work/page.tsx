import VideoEmbed from "@/components/VideoEmbed";

export default function Work() {
  return (
    <main className="min-h-screen flex flex-col bg-black pt-32">
      <section className="py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light mb-16 tracking-wide text-gray-200">Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Nilara */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="4rGEDkHdDDw"
                  title="Project Nilara"
                  poster="/thumbnails/Nilara.jpg"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Nilara</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Set along the pristine shores of Egypt&apos;s North Coast (Sahel), NILARA redefines modern coastal architecture through timeless Mediterranean minimalism, authentic natural textures, and a quiet luxury lifestyle. Designed not merely as a summer getaway, but as a home for every chapter&mdash;blending tranquil private villa living, world-class marina lifestyle, and seamless coastal hospitality.
              </p>
            </div>

            {/* Schneetraum Eis */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="mfPxJq_ZToE"
                  title="Project Schneetraum Eis"
                  poster="/thumbnails/schneetraum-eis.jpeg"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Schneetraum Eis</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                This mockumentary commercial tells the story of Helmer Schneider and the accidental creation of Schneetraum Eis. Designed by Oanki Studio, this project serves as an end-to-end Creative AI case study demonstrating high-level visual, character, and audio continuity for broadcast standards.
              </p>
            </div>

            {/* Uruo Winery */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="MdvbbFcIFwk"
                  title="Project Uruo Winery"
                  poster="/thumbnails/uruo-winery.png"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Uruo Winery</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                URUO isn&apos;t a wine that exists yet &mdash; it&apos;s a concept film built to explore how far AI-native production can go when paired with real technical accuracy. Every stage of red winemaking is represented as it actually happens: hand harvest, crush and destem, cold maceration, temperature-controlled fermentation, malolactic conversion, lab analysis, and bottling &mdash; sequenced and detailed the way a real cellar would run it.
              </p>
            </div>

            {/* Schwarzform */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="AtRbkH86Kdo"
                  title="Project Schwarzform"
                  poster="/thumbnails/schwarzform.png"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Schwarzform</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Pure form. Pure black. Berlin aesthetic.
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
