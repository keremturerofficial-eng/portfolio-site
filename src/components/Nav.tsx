import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-24 py-6">
      <Link href="/" className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300">
        Kerem Türer
      </Link>
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/music-videos" className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300">
          Music Videos
        </Link>
        <Link href="/special-projects" className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300">
          Special Projects
        </Link>
      </div>
    </nav>
  );
}
