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
          .site-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem 3rem;
            border-top: 1px solid rgba(196,168,130,0.08);
            background: var(--dark2);
          }
          .footer-socials {
            display: flex;
            gap: 1rem;
          }
          .footer-social-btn {
            color: var(--text-muted);
            text-decoration: none;
            transition: color 0.2s;
            display: inline-flex;
            align-items: center;
          }
          .footer-social-btn:hover { color: var(--tan); }
          .footer-copy {
            font-size: 0.6rem;
            letter-spacing: 0.15em;
            color: var(--text-muted);
          }
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
          <div className="footer-copy">&copy; 2026 Rys Corpuz &mdash; Aerospace Engineer</div>
          <div className="footer-socials">
            <a className="footer-social-btn" href="https://www.linkedin.com/in/shira-rys-corpuz/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
            <a className="footer-social-btn" href="https://github.com/RysPuff/" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}