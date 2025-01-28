import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata = {
  title: "Bullarbyn Bakery",
  description: "Artisanal bakery specializing in Polish-inspired pastries",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-yellow/20">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}