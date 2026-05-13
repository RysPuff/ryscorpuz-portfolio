"use client";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Rys Corpuz — Aerospace Engineer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <style>{`
          .nav-hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 4px;
          }
          .nav-hamburger span {
            display: block;
            width: 22px;
            height: 1.5px;
            background: var(--tan);
            transition: transform 0.3s, opacity 0.3s;
          }
          .nav-hamburger-open span:nth-child(1) {
            transform: translateY(6.5px) rotate(45deg);
          }
          .nav-hamburger-open span:nth-child(2) {
            opacity: 0;
          }
          .nav-hamburger-open span:nth-child(3) {
            transform: translateY(-6.5px) rotate(-45deg);
          }
          @media (max-width: 768px) {
            .nav-hamburger { display: flex; }
            .nav-links {
              display: none;
              position: fixed;
              top: 56px; left: 0; right: 0;
              flex-direction: column;
              background: rgba(15,11,8,0.97);
              backdrop-filter: blur(12px);
              padding: 2rem 3rem;
              gap: 1.5rem;
              border-bottom: 1px solid rgba(196,168,130,0.12);
              z-index: 99;
            }
            .nav-links.nav-open { display: flex; }
            .nav-links a { font-size: 0.85rem; }
          }

        <footer className="site-footer">
          <div className="footer-copy">&copy; 2026 Rys Corpuz &mdash; Aerospace Engineer</div>
          <div className="footer-socials">
            <a className="footer-social-btn" href="https://www.linkedin.com/in/shira-rys-corpuz/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              𝓲𝓷
            </a>
            <a className="footer-social-btn" href="https://github.com/RysPuff/" target="_blank" rel="noopener noreferrer" title="GitHub">
              ⌥
            </a>
          </div>
        </footer> 

        `}</style>

        <nav>
          <a className="nav-logo" href="/">Rys Corpuz</a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <button
            className={`nav-hamburger ${menuOpen ? "nav-hamburger-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {children}

        <footer className="site-footer">
          <div className="footer-socials">
            <a
              className="footer-social-btn"
              href="https://www.linkedin.com/in/shira-rys-corpuz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
            </a>
            <a
              className="footer-social-btn"
              href="https://github.com/RysPuff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ GitHub
            </a>
          </div>
          <div className="footer-copy">&copy; 2026 Rys Corpuz &mdash; Aerospace Engineer</div>
        </footer>
      </body>
    </html>
  );
}