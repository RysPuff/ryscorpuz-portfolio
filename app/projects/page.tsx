import { projects } from "../data/projects";

const accentClass: Record<string, string> = {
  "#6B1F2A": "accent-maroon",
  "#7B5EA7": "accent-purple",
  "#C4A882": "accent-tan",
};

function ProjectCard({ proj }: { proj: typeof projects[0] }) {
  return (
    <a className="project-card-link" href={`/projects/${proj.slug}`}>
        <div className={`project-card ${accentClass[proj.accent] ?? "accent-maroon"}`} style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>        <div className="project-card-img-wrap">
          <img src={proj.images[0].src} alt={proj.name} />
        </div>
        <div style={{ padding: "1.5rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="project-date">{proj.date}</div>
          <div className="project-name">{proj.name}</div>
          <div className="project-subtitle">{proj.subtitle}</div>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--text-muted)", marginTop: "0.5rem" }}>{proj.short}</p>
          <div className="project-card-footer">View project →</div>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
const current = projects.filter((p) => p.status === "current").sort((a, b) => a.order - b.order);
const past = projects.filter((p) => p.status === "past").sort((a, b) => a.order - b.order);
const future = projects.filter((p) => p.status === "future").sort((a, b) => a.order - b.order);


  return (
    <>
      <style>{`
        .project-card-link {
          text-decoration: none; display: flex;
          flex-direction: column; height: 100%;
          transition: transform 0.3s;
          }
        }
        .project-card-link:hover { transform: translateY(-3px); }
        .project-card-link:hover .project-card {
          border-color: rgba(196,168,130,0.35);
        }
        .project-card-img-wrap {
          width: 100%; aspect-ratio: 16/9;
          overflow: hidden;
          background: var(--dark2);
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid rgba(196,168,130,0.08);
        }
        .project-card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; opacity: 0.85;
          transition: transform 0.4s ease;
        }
        .project-card-link:hover .project-card-img-wrap img {
          transform: scale(1.04);
        }
        .project-card-placeholder {
          font-size: 0.55rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-muted);
        }
        .project-card-footer {
          margin-top: 1.25rem;
          font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--tan-dark);
        }
        .current-badge {
          display: inline-block;
          font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 0.25rem 0.75rem;
          background: rgba(107,31,42,0.3);
          border: 1px solid rgba(107,31,42,0.5);
          color: #C4777F;
          margin-bottom: 2rem;
        }
        .projects-subsection { margin-bottom: 4rem; }
        .projects-subsection-title {
          font-size: 1rem; letter-spacing: 0.65em; text-transform: uppercase;
          color: var(--tan-light); margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .projects-subsection-title::after {
          content: ''; flex: 1;
          height: 1px; background: rgba(196,168,130,0.4);
        }
      `}</style>

      <section className="page-section" style={{ background: "var(--dark2)" }}>
        <div className="section-label">// 001</div>
        <h2 className="section-title">Projects</h2>

        {/* CURRENT */}
        <div className="projects-subsection">
          <div className="projects-subsection-title">Current Projects</div>
          <div className="projects-grid">
            {current.map((proj) => (
              <ProjectCard key={proj.slug} proj={proj} />
            ))}
          </div>
        </div>

        {/* PAST */}
        <div className="projects-subsection">
          <div className="projects-subsection-title">Past Projects</div>
          <div className="projects-grid">
            {past.map((proj) => (
              <ProjectCard key={proj.slug} proj={proj} />
            ))}
          </div>
        </div>

        {/* FUTURE */}
        <div className="projects-subsection">
          <div className="projects-subsection-title">Future Planned Projects</div>
          <div className="projects-grid">
            {future.map((proj) => (
              <ProjectCard key={proj.slug} proj={proj} />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}