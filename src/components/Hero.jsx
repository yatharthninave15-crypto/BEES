import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

/* We import the background image & logo as static assets via Vite */
import heroBg from '../assets/hero-bg.png'
import logo from '../assets/logo.svg'

const navLinks = [
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Compare', href: '#comparison' },
  { label: 'Our Story', href: '#story' },
  { label: 'FAQ', href: '#faq' },
]

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Navigation */}
      <nav className={`hero__nav ${scrolled ? 'hero__nav--scrolled' : ''}`}>
        <div className="container hero__nav-inner">
          <a href="#hero" className="hero__logo-link">
            <img src={logo} alt="BEES Logo" className="hero__logo" />
          </a>

          {/* Desktop links */}
          <ul className="hero__nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hero__nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#waitlist" className="btn btn--white hero__nav-cta">Join Waitlist</a>

          {/* Mobile hamburger */}
          <button
            className={`hero__hamburger ${menuOpen ? 'hero__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="hero__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hero__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#waitlist" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            100% Natural
          </motion.span>

          <h1 className="hero__title">
            Nature's Energy,<br />
            <span className="hero__title-accent">Ready to Go.</span>
          </h1>

          <p className="hero__subtitle">
            A natural pre-workout honey gel — made with raw wild forest honey and
            green tea. No crash, no mystery blend. Just pure energy.
          </p>

          <div className="hero__cta-group">
            <a href="#waitlist" className="btn btn--white hero__cta-btn">
              Join the Waitlist
            </a>
            <a href="#problem" className="btn btn--outline hero__cta-btn hero__cta-btn--outline">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
