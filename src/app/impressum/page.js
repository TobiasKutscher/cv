import Link from 'next/link'

export const metadata = {
  title: 'Impressum - ByteBakery UG (haftungsbeschränkt)',
  description: 'Impressum von ByteBakery UG (haftungsbeschränkt)',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 md:px-10 lg:px-12 flex justify-center">
      <section className="w-full max-w-3xl bg-white/90 border border-slate-200 rounded-2xl shadow-sm px-6 sm:px-10 py-10 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 sm:px-4 py-2 rounded-full shadow-sm transition-colors"
          >
            <span className="mr-2 text-base">←</span>
            Zurück zur Startseite
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Impressum
          </h1>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h2 className="text-base font-semibold mb-1 text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p>ByteBakery UG (haftungsbeschränkt)</p>
          <p>Leinsamenweg 114</p>
          <p>50933 Köln</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Handelsregister</h2>
          <p>Handelsregister: HRB 115453</p>
          <p>Registergericht: Handelsregister B des Amtsgerichts Köln</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Vertreten durch</h2>
          <p>Oliver Ester</p>
        </div>

        <div>
            <h2 className="text-base font-semibold mb-1 text-slate-900">Kontakt</h2>
          <p>Tobias Kutscher</p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:tobias-kutscher@gmx.at"
              className="underline"
            >
              tobias-kutscher@gmx.at
            </a>
          </p>
          <p>Telefon: +49 157 75881704</p>
        </div>

        <div>
            <h2 className="text-base font-semibold mb-1 text-slate-900">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </div>

        <div>
            <h2 className="text-base font-semibold mb-1 text-slate-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
        </div>
      </section>
    </main>
  )
}

