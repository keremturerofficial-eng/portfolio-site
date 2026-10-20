import Image from "next/image";
import VideoEmbed from "@/components/VideoEmbed";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
            <Image
              src="/Kerem_Turer_shot.png"
              alt="Kerem Turer - AI Creative Director & Concept Architect"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Kerem Turer <br />AI Creative Director & Concept Architect
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Bringing creative awareness to AI
            </p>
          </div>
        </div>
      </section>

      {/* 2. WORK BÖLÜMÜ */}
      <section className="py-32 px-8 md:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-16 tracking-wide text-gray-200">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Nilara */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="dx3TV1QQ-2Q"
                  title="Project Nilara"
                  poster="/thumbnails/Nilara.jpg"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Nilara</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                "Project Nilara" A conceptual social-first commercial created for NILARA, a fictional ultra-luxury residential compound located on the Mediterranean North Coast.
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
                This mockumentary commercial tells the story of Helmer Schneider and the accidental creation of Schneetraum Eis. 
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
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Oanki Studio approaches every subject it tackles as the creation of a unique world. We do not view our products merely as merchandise; we consider the psychology of everyone involved in the journey from production to consumption. Lifestyle is the core concept behind Oanki Studio; our creations emerge from deep research, thorough analysis, and an unwavering commitment to aesthetics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. İLETİŞİM BÖLÜMÜ */}
      <section className="min-h-[50vh] flex items-center justify-center border-t border-white/10">
        <a
          href="mailto:info@keremturer.com"
          className="text-4xl md:text-7xl font-bold tracking-tighter text-white/50 hover:text-white transition-colors duration-500"
        >
          info@keremturer.com
        </a>
      </section>

    </main>
  );
}
