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
              alt="Kerem Turer - AI Creative Director & Concept Architect"
              fill
              className="object-cover grayscale"
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

      {/* 2. İLETİŞİM BÖLÜMÜ */}
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
