import {Cpu, Heart, Target, Volume2, Zap} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection(): JSX.Element {
  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LED-Beleuchtung",
      description:
        "Das Spielfeld aus Plexiglas wird von einem programmierbaren LED-Streifen beleuchtet, der ein beeindruckendes Lauflicht und Blinken erzeugt, wenn ein Tor fällt.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Lebenslichter",
      description:
        "Auf jeder Spielseite werden sieben lebendige Herzlichter angezeigt, die bei jedem Gegentor abnehmen und das Spielerlebnis intensivieren.",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Akustische Signale",
      description:
        "Ein akustisches Signal ertönt bei jedem erzielten Tor, was das Spielerlebnis mit zusätzlichem Klang verstärkt.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Dynamische Torgrößenanpassung",
      description:
        "Bei einem Torunterschied von mehr als 4 Toren wird das Tor des scheinbar schwächeren Spielers verkleinert, um die Spielbalance zu gewährleisten.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Arduino-Steuerung",
      description:
        "Das gesamte System wird präzise durch einen Arduino-Mikrocontroller gesteuert, der eine flexible Anpassung der Spielregeln ermöglicht.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Einzigartige Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Erlebe Spielspaß auf einer neuen Ebene mit innovativen Funktionen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
