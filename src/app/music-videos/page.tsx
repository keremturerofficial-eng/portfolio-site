import VideoEmbed from "@/components/VideoEmbed";

export default function MusicVideos() {
  return (
    <main className="min-h-screen flex flex-col bg-black pt-32">
      <section className="py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light mb-16 tracking-wide text-gray-200">Music Videos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Clear as Glass */}
            <div className="flex flex-col gap-4">
              <div className="aspect-video w-full bg-white/5 relative">
                <VideoEmbed
                  videoId="7tLL-UvEKvo"
                  title="Clear as Glass is Oanki Studio's debut music video"
                  poster="/thumbnails/Clear.jpeg"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Clear as Glass</p>
            </div>

            {/* Diving */}
<div className="flex flex-col gap-4">
  <div className="aspect-video w-full bg-white/5 relative">
    <VideoEmbed
      videoId="BBQ7N7AG0j0"
      title={`An audiovisual experiment for the track "Diving" from Kerem Türer's first album "a-in".`}
      poster="/thumbnails/Diving.jpeg"
    />
  </div>
  <p className="text-sm text-gray-400 uppercase tracking-widest">Diving</p>
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
