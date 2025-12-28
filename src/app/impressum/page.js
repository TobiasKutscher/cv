"use client";

import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Home as HomeIcon } from 'lucide-react';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24 max-w-3xl mx-auto">
      <div className="mb-8 flex justify-end">
        <Link href="/">
          <Button variant="outline" size="lg">
            <HomeIcon className="mr-2 h-4 w-4" />
            Back to Main Page
          </Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="font-semibold mb-1">Angaben gemäß § 5 TMG</h2>
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
          <h2 className="font-semibold mb-1">Kontakt</h2>
          <p>Tobias Kutscher</p>
          <p>
            E-Mail: <a href="mailto:hallo@tobiaskutscher.com" className="underline">hallo@tobiaskutscher.com</a>
          </p>
          <p>Telefon: +49 157 75881704</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">EU-Streitschlichtung</h2>
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
          <h2 className="font-semibold mb-1">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </main>
  )
}


