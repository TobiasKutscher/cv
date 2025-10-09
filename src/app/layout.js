import { Lato } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Tobias Kutscher - Senior Data Scientist & AI Engineer',
  description: 'Senior Data Scientist Portfolio and Side Hustles',
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
      <body className="font-lato">
        {children}
      </body>
    </html>
  )
}