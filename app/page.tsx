"use client";
import { useState, useEffect } from "react";
import { projects } from "./data/projects";

const currentProjects = projects.filter((p) => p.status === "past");

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % currentProjects.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  }

  const proj = currentProjects[current];

  return (
    <>
      <style>{`
        #home {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 2fr;
          align-items: center;
          position: relative; overflow: hidden;
          padding: 5rem 0 3rem;
          background: linear-gradient(135deg, var(--dark) 0%, var(--dark2) 50%, var(--purple-muted) 100%);
          gap: 1rem;
        }
        .home-left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 0 2rem 0 3rem;
          position: relative; z-index: 1;
        }
        .home-bg-circle {
          position: absolute; border-radius: 50%;
          opacity: 0.06; pointer-events: none;
        }
        .home-bg-circle.c1 {
          width: 600px; height: 600px;
          background: var(--maroon);
          top: -200px; right: -150px;
        }
        .home-bg-circle.c2 {
          width: 300px; height: 300px;
          background: var(--purple-light);
          bottom: 50px; left: -80px;
        }
        .home-eyebrow {
          font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--tan); margin-bottom: 1rem;
        }
        .home-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 600; line-height: 0.95;
          color: var(--cream); margin-bottom: 0.75rem;
        }
        .home-name span { color: #8B3A47; font-style: italic; }
        .home-role {
          font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text-muted); margin-top: 1.5rem; margin-bottom: 0.75rem;
        }
        .home-desc {
          max-width: 380px;
          font-family: 'Cormorant Garamond', serif; font-size: 1.05rem;
          line-height: 1.8; color: var(--text-muted); margin-bottom: 2rem;
        }
        .home-buttons {
          display: flex; gap: 0.75rem; flex-wrap: wrap;
        }
        .home-cta {
          display: inline-block; padding: 0.75rem 1.75rem;
          border: 1px solid var(--tan); color: var(--tan);
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none;
          background: transparent;
          transition: background 0.2s, color 0.2s;
        }
        .home-cta:hover { background: var(--tan); color: var(--dark); }
        .home-cta.secondary {
          border-color: rgba(196,168,130,0.3);
          color: var(--text-muted);
        }
        .home-cta.secondary:hover {
          background: rgba(196,168,130,0.08);
          color: var(--tan);
          border-color: rgba(196,168,130,0.5);
        }
        .home-right {
          display: flex; flex-direction: column; justify-content: center;
          padding: 0 3rem 0 1rem;
        }
        .slideshow {
          border: 1px solid rgba(196,168,130,0.15);
          overflow: hidden;
          background: var(--dark3);
        }
        .slide-clickable {
          text-decoration: none;
          display: block;
          cursor: pointer;
        }
        .slide-image-wrap {
          width: 100%; aspect-ratio: 16/9;
          overflow: hidden; position: relative;
          background: var(--dark2);
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid rgba(196,168,130,0.08);
        }
        .slide-image-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          opacity: 1;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .slide-clickable:hover .slide-image-wrap img {
          opacity: 1;
          transform: scale(1.02);
        }
        .slide-accent-bar { height: 3px; transition: background 0.4s; }
        .slide-body {
          padding: 1.5rem 2rem;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .slide-body.hidden { opacity: 0; transform: translateY(6px); }
        .slide-body.visible { opacity: 1; transform: translateY(0); }
        
        .slide-footer-label {
          margin-top: 1.25rem;
          font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--tan-dark);
        }

        .slide-controls {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.6rem 1.25rem;
          border-top: 1px solid rgba(196,168,130,0.08);
          background: rgba(0,0,0,0.1);
        }
        .slide-dots { display: flex; gap: 6px; align-items: center; }
        .slide-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: rgba(196,168,130,0.2);
          border: none; cursor: pointer; padding: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .slide-dot.active { background: var(--tan); transform: scale(1.3); }
        .slide-arrows { display: flex; gap: 6px; }
        .slide-arrow {
          width: 26px; height: 26px;
          border: 1px solid rgba(196,168,130,0.2);
          background: transparent; color: var(--tan-light);
          font-size: 0.9rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .slide-arrow:hover {
          border-color: rgba(196,168,130,0.5);
          background: rgba(196,168,130,0.06);
        }
        .slide-link {
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--tan-dark); text-decoration: none;
          transition: color 0.2s;
        }
        .slide-link:hover { color: var(--tan); }

        @media (max-width: 768px) {
          #home { grid-template-columns: 1fr; gap: 2rem; }
          .home-left { padding: 0 1.5rem; }
          .home-right { padding: 0 1.5rem 2rem; }
        }
      `}</style>

      <section id="home">
        <div className="home-bg-circle c1" />
        <div className="home-bg-circle c2" />

        <div className="home-left">
          <div className="home-eyebrow">Aerospace Engineer</div>
          <h1 className="home-name">
            Rys<br /><span>— Engineer</span>
          </h1>
          <div className="home-role">Rockets &nbsp;·&nbsp; Radiation &nbsp;·&nbsp; Resilience</div>
          <p className="home-desc">
            Website under construction, but you can still explore my projects and background below.
          </p>
          <div className="home-buttons">
            <a className="home-cta" href="/projects">View Projects</a>
            <a className="home-cta secondary" href="/about">About Me</a>
            <a className="home-cta secondary" href="/contact">Contact Me</a>
          </div>
        </div>

        <div className="home-right">
          <div className="slideshow">
            <a href={`/projects/${proj.slug}`} className="slide-clickable">
              <div className="slide-image-wrap">
                <img src={proj.images[0].src} alt={proj.name} />
              </div>
              {/* Accent bar now matches project card side-bar style */}
              <div className="slide-accent-bar" style={{ background: proj.accent }} />
              
              <div className={`slide-body ${fade ? "visible" : "hidden"}`}>
                <div className="project-date">{proj.date}</div>
                <div className="project-name">{proj.name}</div>
                <div className="project-subtitle">{proj.subtitle}</div>
                
                {/* short description in slides*/}
                <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--text-muted)", marginTop: "0.5rem" }}>{proj.short}</p>
                
                <div className="slide-footer-label">View project →</div>
              </div>
            </a>

            <div className="slide-controls">
              <div className="slide-dots">
                {currentProjects.map((_, i) => (
                  <button
                    key={i}
                    className={`slide-dot ${i === current ? "active" : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <a className="slide-link" href="/projects">All projects</a>
              <div className="slide-arrows">
                <button className="slide-arrow" onClick={() => goTo((current - 1 + currentProjects.length) % currentProjects.length)}>‹</button>
                <button className="slide-arrow" onClick={() => goTo((current + 1) % currentProjects.length)}>›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}