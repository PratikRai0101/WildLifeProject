'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">WildLife Connect</Link>
        <ul className="flex flex-wrap space-x-4">
          <li><Link href="/" className={pathname === '/' ? 'font-bold' : ''}>Home</Link></li>
          <li><Link href="/animals" className={pathname === '/animals' ? 'font-bold' : ''}>Animals</Link></li>
          <li><Link href="/map" className={pathname === '/map' ? 'font-bold' : ''}>Interactive Map</Link></li>
          <li><Link href="/education" className={pathname === '/education' ? 'font-bold' : ''}>Learn</Link></li>
          <li><Link href="/eco-tourism" className={pathname === '/eco-tourism' ? 'font-bold' : ''}>Eco-Tourism</Link></li>
          <li><Link href="/marketplace" className={pathname === '/marketplace' ? 'font-bold' : ''}>Shop</Link></li>
          <li><Link href="/donate" className={pathname === '/donate' ? 'font-bold' : ''}>Donate</Link></li>
        </ul>
      </nav>
    </header>
  )
}

