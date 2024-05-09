import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FreeQuoteForm from "@/components/FreeQuoteForm"
import siteInfo from "@/app/meta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteInfo.title,
  description: "McKenzie & Paz Builders",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#78878B] h-screen ${inter.className}`}>
        <main className="wrapper bg-white min-h-[700px] lg:w-[1024px] mx-auto lg:p-7 p-2 lg:mt-4">
          <Header />
          <div className="mt-6">
            <div className="content grid lg:grid-cols-[1fr_300px] lg:items-start gap-6">
              {children}
              <FreeQuoteForm />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
