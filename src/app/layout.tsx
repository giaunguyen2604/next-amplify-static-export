import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Next.js Site",
  description: "A multi-page Next.js site with various features",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-powder-blue text-navy`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

