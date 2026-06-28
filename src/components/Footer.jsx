import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'
import './Footer.css'

const footerLinks = [
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Compare', href: '#comparison' },
  { label: 'Our Story', href: '#story' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join Waitlist', href: '#waitlist' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logo} alt="BEES Logo" className="footer__logo" />
            <p className="footer__tagline">
              Natural ingredients. Steady energy. No crash, no mystery blend — just honey
              and green tea doing what they've always done, now packed for your workout.
            </p>
          </div>

          <nav className="footer__nav">
            <span className="footer__nav-title">Quick Links</span>
            <ul className="footer__nav-list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__nav-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} BEES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
