export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30 space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-white mt-4 mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen.
            </p>
            <p className="font-semibold text-purple-300">
              Diese Website ist besonders datenschutzfreundlich: Wir verwenden KEINE Cookies, KEINE Tracking-Tools und
              KEINE Analyse-Software.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. Hosting</h2>
            <h3 className="font-semibold text-white mt-4 mb-2">GitHub Pages</h3>
            <p className="mb-3">
              Diese Website wird auf GitHub Pages gehostet. Der Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr. St.,
              San Francisco, CA 94107, USA.
            </p>
            <p className="mb-3">
              GitHub kann bei jedem Aufruf dieser Website automatisch technische Informationen erfassen, darunter Ihre
              IP-Adresse. Dies erfolgt in sogenannten Server-Log-Dateien. Folgende Daten können erfasst werden:
            </p>
            <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mb-3">
              Die Datenerfassung durch GitHub erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung seiner Website.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Datenerfassung auf dieser Website</h2>

            {/* <h3 className="font-semibold text-white mt-4 mb-2">Cookies</h3>
            <p className="mb-4 font-semibold text-green-400">
              Diese Website verwendet KEINE Cookies. Es werden keine Informationen in Ihrem Browser gespeichert.
            </p>

            <h3 className="font-semibold text-white mt-4 mb-2">Tracking und Analyse-Tools</h3>
            <p className="mb-4 font-semibold text-green-400">
              Diese Website verwendet KEINE Tracking-Tools wie Google Analytics, Facebook Pixel oder ähnliche Dienste.
              Ihr Besuch wird nicht analysiert oder getrackt.
            </p> */}

            <h3 className="font-semibold text-white mt-4 mb-2">Externe Inhalte</h3>
            {/* <p className="mb-3 font-semibold text-green-400">
              Diese Website lädt KEINE externen Inhalte von Drittanbietern. Alle Bilder, Videos und Ressourcen werden
              lokal gehostet.
            </p> */}
            <p className="mb-3">
              Wenn Sie auf einen Link zu YouTube klicken, werden Sie zur YouTube-Website weitergeleitet. Erst dann
              gelten die Datenschutzbestimmungen von YouTube. Vor dem Klick werden keine Daten an YouTube übermittelt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. Kontaktaufnahme</h2>
            <h3 className="font-semibold text-white mt-4 mb-2">Kontakt per E-Mail</h3>
            <p className="mb-3">
              Auf dieser Website gibt es KEIN Kontaktformular. Die Kontaktaufnahme erfolgt ausschließlich über einen
              E-Mail-Link (mailto:niftyenlabz@gmail.com).
            </p>
            <p className="mb-3">
              Wenn Sie auf diesen Link klicken, öffnet sich Ihr lokales E-Mail-Programm. Die Kommunikation erfolgt
              direkt zwischen Ihrem E-Mail-Client und unserem E-Mail-Server - NICHT über diese Website.
            </p>
            <p className="mb-3">
              Wir speichern keine Daten über diese Website. Ihre E-Mail wird wie gewöhnliche E-Mail-Kommunikation
              verarbeitet.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung der E-Mail-Daten ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Kommunikation) bzw. Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zu Vertragsangelegenheiten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Ihre Rechte</h2>

            <p>
              Hinweis: Da diese Website nur minimale Daten sammelt (hauptsächlich über GitHub Pages Server-Logs, auf die
              wir keinen direkten Zugriff haben), sind Ihre Möglichkeiten zur Ausübung dieser Rechte eingeschränkt. Für
              Server-Logs wenden Sie sich bitte direkt an GitHub.
            </p>
          </div>

          <div className="text-sm text-gray-400 pt-4 border-t border-purple-500/30">
            <p>Stand: November 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
