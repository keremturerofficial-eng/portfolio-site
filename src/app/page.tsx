import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
            <Image
              src="/Kerem_Turer_shot.jpeg"
              alt="Kerem Turer - Creative Director - Writer"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Kerem Turer <br />Creative Director - Writer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Bringing creative awareness to AI
            </p>
          </div>
        </div>
      </section>

      {/* 2. VIDEO SHOWCASE BÖLÜMÜ */}
      <section className="py-32 px-8 md:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-16 tracking-wide text-gray-200">Cinematic Brand Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Video 1 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <iframe
                  src="https://www.youtube.com/embed/pPdUxPD_LyY?rel=0&modestbranding=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Kinetiq</p>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <iframe
                  src="https://www.youtube.com/embed/l27aeWB48QU?rel=0&modestbranding=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project Aelia</p>
            </div>

            {/* Video 3 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <iframe
                  src="https://www.youtube.com/embed/znsV1-V4-Kc?rel=0&modestbranding=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">"Turn that light down" music video</p>
            </div>

            {/* Video 4 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <iframe
                  src="https://www.youtube.com/embed/Gm7gy8_276M?rel=0&modestbranding=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Project LuxHertz</p>
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