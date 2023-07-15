import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pravaah",
  description: "PRAVAAH | A TECHNOLOGY FEST BY AMTICS - UTU",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
