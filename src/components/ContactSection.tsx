import {Mail, Sparkles} from "lucide-react";

export default function ContactSection(): JSX.Element {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Bereit für die Zukunft?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Bei Fragen oder Anregungen können Sie uns gerne kontaktieren. Wir freuen uns über Ihr Interesse an
          HeartStrikair!
        </p>

        <a
          href="mailto:niftyenlabz@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Kontakt aufnehmen
        </a>

        <div className="mt-16 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30 inline-flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">nifty engineering LABZ</h3>
              <p className="text-gray-400">Innovation trifft Spielspaß</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
