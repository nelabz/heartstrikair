import {Users} from "lucide-react";

export default function StorySection(): JSX.Element {
  return (
    <section id="story" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Die Entstehung:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Eine kleine Chronik
              </span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Im März 2023 nahm alles seinen Anfang mit der simplen Vorstellung, einen Air Hockey Tisch aus Holz zu
                bauen. Doch schon bald zeichnete sich ab, dass dies kein gewöhnliches Unterfangen werden würde. Die
                Vision war klar: ein Tisch mit innovativen Features und tollen Effekten.
              </p>
              <p>
                Erste Konzepte umfassten eine LED-Beleuchtung unter dem Spielfeld und die Integration einer
                Laserlichtschranke für präzise Torerkennung. Der Wunsch nach einem einzigartigen Spielerlebnis nahm
                Gestalt an.
              </p>
              <p>
                Um auch den Kleinsten die Teilnahme zu ermöglichen, wurde die Tischhöhe reduziert. Zusätzlich entstand
                die Idee, eine dynamische Anpassung der Torgröße zu realisieren, um ein ausgewogenes Spielerlebnis
                zwischen Groß und Klein zu gewährleisten.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Konstruktion & Design</h3>
                  <p className="text-gray-400">
                    Die Konstruktion wurde durchdacht modular gestaltet, sodass der Tisch zerlegbar ist und jederzeit
                    Zugang zu allen wichtigen Komponenten gewährleistet ist.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">3D-Druck Innovation</h3>
                  <p className="text-gray-400">
                    Mit einem 3D-Drucker wurden sorgfältig modellierte 3D-Herzen angefertigt, die von der
                    LED-Beleuchtung durchstrahlt werden.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Elektronik & Programmierung</h3>
                  <p className="text-gray-400">
                    Am Computer entwickelte Schaltpläne wurden auf eine eigens entworfene Platine übertragen, die
                    Motorsteuerung und Lichtsensorsystem koordiniert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-6 py-3 rounded-full border border-purple-500/30">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-white">Kinderfreundlich und Erwachsenen-tauglich</span>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Reduzierte Tischhöhe für problemloses Spielerlebnis der Kleinsten. Dynamische Torgrößenanpassung bietet eine
            Herausforderung für Spieler aller Altersgruppen.
          </p>
        </div>
      </div>
    </section>
  );
}
