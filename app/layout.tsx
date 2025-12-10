import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import "./globals.css"
import "@mantine/core/styles.css"
import { MetaPixel } from "@/components/MetaPixel"
import { MetaPixelEvents } from "@/components/MetaPixelEvents"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16980195675" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16980195675');
          `}
        </Script>


      </head>
      <body className={`font-sans antialiased !bg-[#0B0D14] !text-white`}>
        <MetaPixel />
        <Suspense fallback={null}>
          <MetaPixelEvents />
        </Suspense>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  )
}
