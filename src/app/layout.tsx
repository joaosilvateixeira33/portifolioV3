import type { Metadata } from "next"
import {
  Inconsolata,
  Maven_Pro,
  Asap,
} from "next/font/google"

import "../styles/globals.css"

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
})

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
})

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
})

export const metadata: Metadata = {
  title: "Portifolio | João Marcos",
  description: "Projeto portifolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inconsolata.variable}
          ${mavenPro.variable}
          ${asap.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}