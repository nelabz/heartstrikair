import {ArrowRight, Play, Youtube} from "lucide-react";

export default function VideoSection(): JSX.Element {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    // Fallback: Zeige Platzhalter-Grafik statt externes YouTube-Bild
    e.currentTarget.style.display = "none";
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.style.backgroundColor = "#1a1a1a";
    }
  };

  return (
    <section id="video" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">HeartStrikair in Action</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Erleben Sie den ultimativen Air Hockey Tisch im Video
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <a
            href="https://www.youtube.com/watch?v=XBRLSKf_d3Y"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <img
                src="/heartstrikair-thumbnail.jpeg"
                alt="HeartStrikair YouTube Video Thumbnail"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />

              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* YouTube branding */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full">
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-white text-sm font-medium">YouTube</span>
              </div>
            </div>

            {/* Video Title Bar */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Air Hockey Table Ultimate!</h3>
                  <p className="text-gray-300 text-sm md:text-base">Entdecken Sie alle Features im Detail</p>
                </div>
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </a>

          {/* Additional CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-400">Klicken Sie auf das Video, um HeartStrikair in voller Aktion zu erleben</p>
          </div>
        </div>
      </div>
    </section>
  );
}
