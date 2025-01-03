import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-navy text-powder-blue p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-sky-blue">BlueSky</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-sky-blue transition-colors">Home</Link></li>
          <li><Link href="/feature" className="hover:text-sky-blue transition-colors">Features</Link></li>
          <li><Link href="/contact" className="hover:text-sky-blue transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

