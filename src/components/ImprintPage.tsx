export default function ImpressumPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30 space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>neLabz - nifty engineering LABZ</p>
            <p>Michael Nelz</p>
            <p>Frankfurter Str. 3</p>
            <p>61200 Wölfersheim</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
            <p>E-Mail: niftyenlabz@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Haftungsausschluss</h2>
            <h3 className="font-semibold text-white mt-4 mb-2">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="font-semibold text-white mt-4 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
