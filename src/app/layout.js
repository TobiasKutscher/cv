import { Lato } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'Tobias Kutscher - Senior Data Scientist & AI Engineer',
  description: 'Senior Data Scientist Portfolio and Side Hustles',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"
  }
}

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FN6H9V9LFE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FN6H9V9LFE');
          `}
        </Script>
      </head>
      <body className="font-lato min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <footer className="w-full border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          <Link href="/impressum" className="underline hover:text-gray-700">
            Impressum
          </Link>
        </footer>
      </body>
    </html>
  )
}
