import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from './ui/button'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
]

const Navbar = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Hanno Nguyen
        </Link>

        <nav className="nav-desktop">
          {navItems.map(item => (
            <a key={item.href} href={isHome ? item.href : `/${item.href}`} className="btn btn-ghost">
              {item.label}
            </a>
          ))}
          <a className="btn btn-outline" href="https://github.com/Raijin1302" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <button className="btn btn-ghost mobile-only" onClick={() => setOpen(true)} aria-label="Open menu">
          Menu
        </button>
      </div>

      {open ? (
        <div className="menu-sheet" onClick={() => setOpen(false)}>
          <div className="menu-panel" onClick={e => e.stopPropagation()}>
            <button className="btn btn-outline" onClick={() => setOpen(false)}>
              Close
            </button>
            <nav className="mobile-nav">
              {navItems.map(item => (
                <a key={item.href} className="btn btn-ghost" href={isHome ? item.href : `/${item.href}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
