import {ArrowRight, ChevronDown, Sparkles} from "lucide-react";

export default function HeroSection(): JSX.Element {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget;
    target.style.display = "none";
    const nextSibling = target.nextSibling as HTMLElement | null;
    if (nextSibling) {
      nextSibling.style.display = "flex";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Die Zukunft des{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Air Hockey
              </span>{" "}
              beginnt hier!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              HeartStrikair - Der revolutionäre Air Hockey Tisch mit LED-Beleuchtung, interaktiver Technologie und
              dynamischer Spielanpassung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({behavior: "smooth"})}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Entdecke mehr <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Kontakt aufnehmen
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <img
                  src="http://nelabz.com/wp-content/uploads/2024/03/hs1-1024x619.png"
                  alt="HeartStrikair Air Hockey Tisch"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="hidden flex-col items-center justify-center text-purple-300 p-8">
                  <Sparkles className="w-16 h-16 mb-4" />
                  <span className="text-xl font-semibold">HeartStrikair</span>
                  <span className="text-sm mt-2">Bild wird geladen...</span>
                </div>
              </div>
            </div>
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
}
