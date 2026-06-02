import type React from "react"
import { Playfair_Display, Inter, Crimson_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata = {
  title: "Rain Financial Services - Your Trusted Loan Provider",
  description: "Professional loan services with competitive rates and personalized support",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  )
}
