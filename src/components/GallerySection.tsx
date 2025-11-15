import {Sparkles} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export default function GallerySection(): JSX.Element {
  const images: GalleryImage[] = [
    {
      src: "http://nelabz.com/wp-content/uploads/2024/03/hs1-1024x619.png",
      alt: "HeartStrikair Hauptansicht",
      caption: "Der revolutionäre Air Hockey Tisch",
    },
    {
      src: "https://nelabz.com/wp-content/uploads/2024/03/heartstrikair-front-1024x572.png",
      alt: "HeartStrikair Frontansicht",
      caption: "Frontansicht mit LED-Beleuchtung",
    },
    {
      src: "https://nelabz.com/wp-content/uploads/2024/03/heartstrikair-play-1024x572.png",
      alt: "HeartStrikair im Spiel",
      caption: "Spielerlebnis in Aktion",
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget;
    target.style.display = "none";
    const nextSibling = target.nextSibling as HTMLElement | null;
    if (nextSibling) {
      nextSibling.style.display = "flex";
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">HeartStrikair in Aktion</h2>
          <p className="text-xl text-gray-400">Eindrücke unseres innovativen Air Hockey Tisches</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={handleImageError}
                />
                <div className="hidden flex-col items-center justify-center text-purple-300 p-4">
                  <Sparkles className="w-12 h-12 mb-2" />
                  <span className="text-sm text-center">{image.caption}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
