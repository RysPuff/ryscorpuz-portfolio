"use client";
import { useState } from "react";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function openLightbox(i: number) { setLightboxIndex(i); }
  function closeLightbox() { setLightboxIndex(null); }
  function prevImage() { setLightboxIndex((i) => (i! - 1 + project!.images.length) % project!.images.length); }
  function nextImage() { setLightboxIndex((i) => (i! + 1) % project!.images.length); }

  return (
    <>
      <style>{`
        .project-hero {
          min-height: 38vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 8rem 3rem 3rem;
          position: relative;
          background: linear-gradient(135deg, var(--dark) 0%, var(--dark2) 60%, var(--purple-muted) 100%);
          border-bottom: 1px solid rgba(196,168,130,0.1);
        }
        .project-hero-accent { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; }
        .project-hero-date {
          font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text-muted); margin-bottom: 0.6rem;
        }
        .project-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 600;
          color: var(--cream); line-height: 1; margin-bottom: 0.5rem;
        }
        .project-hero-subtitle {
          font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--tan-dark);
        }
        .project-body {
          max-width: 900px; margin: 0 auto;
          padding: 4rem 3rem;
          display: flex; flex-direction: column; gap: 4rem;
        }
        .project-section-label {
          font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--maroon-light); margin-bottom: 0.75rem;
        }
        .project-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem; font-weight: 600;
          color: var(--cream); margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(196,168,130,0.12);
        }
        .project-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; line-height: 1.9; color: var(--text-muted);
        }
        .project-skills { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .project-skill {
          font-size: 0.65rem; letter-spacing: 0.1em;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(196,168,130,0.2);
          color: var(--tan-light);
        }
        .project-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }
        .gallery-item { display: flex; flex-direction: column; gap: 0.5rem; cursor: pointer; }
        .gallery-img-wrap {
          aspect-ratio: 4/3; overflow: hidden;
          background: var(--dark3);
          border: 1px solid rgba(196,168,130,0.1);
          position: relative;
          transition: border-color 0.2s;
        }
        .gallery-item:hover .gallery-img-wrap { border-color: rgba(196,168,130,0.4); }
        .gallery-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; opacity: 0.85;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-img-wrap img { transform: scale(1.03); opacity: 1; }
        .gallery-zoom-hint {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.3);
          opacity: 0; transition: opacity 0.2s;
          font-size: 1.5rem; color: var(--tan);
        }
        .gallery-item:hover .gallery-zoom-hint { opacity: 1; }
        .gallery-caption { font-size: 0.6rem; letter-spacing: 0.1em; color: var(--text-muted); }
        .project-docs { display: flex; flex-direction: column; gap: 0.75rem; }
        .project-doc {
          display: flex; align-items: center; gap: 1.5rem;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(196,168,130,0.1);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          color: var(--text);
        }
        .project-doc:hover { border-color: rgba(196,168,130,0.3); background: rgba(196,168,130,0.04); }
        .project-doc-icon { font-size: 1rem; color: var(--tan-dark); }
        .project-doc-label { font-size: 0.75rem; color: var(--text); }
        .project-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--tan-dark); text-decoration: none;
          margin-bottom: 1rem; transition: color 0.2s;
        }
        .project-back:hover { color: var(--tan); }

        /* LIGHTBOX */
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.92);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 2rem;
        }
        .lightbox-img-wrap {
          position: relative;
          max-width: 90vw; max-height: 75vh;
          display: flex; align-items: center; justify-content: center;
        }
        .lightbox-img-wrap img {
          max-width: 90vw; max-height: 75vh;
          object-fit: contain;
          border: 1px solid rgba(196,168,130,0.15);
        }
        .lightbox-caption {
          margin-top: 1rem;
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text-muted); text-align: center;
        }
        .lightbox-counter {
          margin-top: 0.5rem;
          font-size: 0.6rem; letter-spacing: 0.1em;
          color: var(--tan-dark);
        }
        .lightbox-close {
          position: fixed; top: 1.5rem; right: 1.5rem;
          width: 40px; height: 40px;
          border: 1px solid rgba(196,168,130,0.3);
          background: transparent; color: var(--tan-light);
          font-size: 1.2rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .lightbox-close:hover { border-color: var(--tan); background: rgba(196,168,130,0.08); }
        .lightbox-arrow {
          position: fixed;
          top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          border: 1px solid rgba(196,168,130,0.2);
          background: transparent; color: var(--tan-light);
          font-size: 1.3rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .lightbox-arrow:hover { border-color: var(--tan); background: rgba(196,168,130,0.08); }
        .lightbox-arrow.prev { left: 1.5rem; }
        .lightbox-arrow.next { right: 1.5rem; }

        @media (max-width: 640px) {
          .project-hero { padding: 7rem 2.5rem 3rem; }
          .project-body { padding: 3rem 1.5rem; }
          .lightbox-arrow.prev { left: 0.5rem; }
          .lightbox-arrow.next { right: 0.5rem; }
        }
      `}</style>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-arrow prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className="lightbox-arrow next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={project.images[lightboxIndex].src} alt={project.images[lightboxIndex].caption} />
          </div>
          <div className="lightbox-caption">{project.images[lightboxIndex].caption}</div>
          <div className="lightbox-counter">{lightboxIndex + 1} / {project.images.length}</div>
        </div>
      )}

      <div className="project-hero">
        <a className="project-back" href="/projects">← All Projects</a>
        <div className="project-hero-date">{project.date}</div>
        <h1 className="project-hero-title">{project.name}</h1>
        <div className="project-hero-subtitle">{project.subtitle}</div>
        <div className="project-hero-accent" style={{ background: project.accent }} />
      </div>

      <div className="project-body">

        <div>
          <div className="project-section-label">// Overview</div>
          <h2 className="project-section-title">Description</h2>
          <div className="project-description">
            {(Array.isArray(project.description) ? project.description : project.description.split("\n")).map((line, i) => {
              const trimmedLine = line.trim();
              
              // If the line is empty, return a spacer div for consistent padding
              if (trimmedLine === "") {
                return <div key={i} style={{ height: "1.2rem" }} />;
              }

              // Check if the line is a bullet point to apply specific styling if desired
              const isBullet = trimmedLine.startsWith("-") || trimmedLine.startsWith("•");

              return (
                <p key={i} style={{ 
                  marginBottom: "0.5rem",
                  paddingLeft: isBullet ? "1rem" : "0",
                  textIndent: isBullet ? "-1rem" : "0" 
                }}>
                  {trimmedLine}
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <div className="project-section-label">// Tools & Disciplines</div>
          <h2 className="project-section-title">Skills Applied</h2>
          <div className="project-skills">
            {project.skills.map((s) => (
              <span key={s} className="project-skill">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="project-section-label">// Visuals</div>
          <h2 className="project-section-title">Image Gallery</h2>
          <div className="project-gallery">
            {project.images.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <div className="gallery-img-wrap">
                  <img src={img.src} alt={img.caption} />
                  <div className="gallery-zoom-hint">🔍︎</div>
                </div>
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="project-section-label">// Files & Reports</div>
          <h2 className="project-section-title">Documentation</h2>
          <div className="project-docs">
            {project.documentation.map((doc) => (
              <a key={doc.label} className="project-doc" href={doc.href} target="_blank" rel="noopener noreferrer">
                <span className="project-doc-icon">↓</span>
                <span className="project-doc-label">{doc.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}