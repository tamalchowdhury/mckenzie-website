import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "McKenzie & Paz Builders",
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
        <main className="wrapper bg-white min-h-[700px] lg:w-[1024px] mx-auto p-7 mt-4">
          <Header />
          <div className="mt-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
