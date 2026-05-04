import { projects } from "../data/projects";
import { manualSkills } from "../data/skills";

function getProjectSkills() {
  const map: Record<string, { name: string; slug: string }[]> = {};
  
  for (const proj of projects) {
    if (!proj.skills) continue;
    for (const skill of proj.skills || []) { // Added || [] as a fallback
    if (!skill) continue;
      if (!map[skill]) map[skill] = [];
            if (!map[skill].find((p) => p.slug === proj.slug)) {
        map[skill].push({ name: proj.name, slug: proj.slug });
      }
    }
  }
  return map;
}

export default function Skills() {
  const projectSkills = getProjectSkills();

  return (
    <>
      <style>{`
        .skills-page { background: var(--dark2); }
        .skills-subsection { margin-bottom: 4rem; }
        .skills-subsection-title {
          font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--tan-dark); margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .skills-subsection-title::after {
          content: ''; flex: 1;
          height: 1px; background: rgba(196,168,130,0.1);
        }
        .project-skills-grid {
          display: grid;
          /* This ensures all items in a row maintain the same height */
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
          border: 1px solid rgba(196,168,130,0.1);
          padding: 1.25rem 1.5rem;
          transition: border-color 0.2s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-skill-card:hover { border-color: rgba(196,168,130,0.3); }
        .project-skill-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 600;
          color: var(--cream); margin-bottom: 0.5rem;
        }
        .project-skill-sources { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .project-skill-source {
          font-size: 0.55rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border: 1px solid rgba(196,168,130,0.15);
          color: var(--text-muted);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .project-skill-source:hover {
          border-color: rgba(196,168,130,0.5);
          color: var(--tan);
          background: rgba(196,168,130,0.06);
        }
        .manual-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
          align-items: stretch;
        }
        .manual-skill-card {
          background: var(--dark3);
          border: 1px solid rgba(196,168,130,0.1);
          padding: 1.25rem 1.5rem;
          display: flex; flex-direction: column; gap: 0.4rem;
          transition: border-color 0.2s;
        }
        .manual-skill-card:hover { border-color: rgba(196,168,130,0.3); }
        .manual-skill-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 600;
          color: var(--cream);
        }
        .manual-skill-source { font-size: 0.6rem; letter-spacing: 0.1em; color: var(--text-muted); }
        .cert-card {
          background: var(--dark3);
          border: 1px solid rgba(196,168,130,0.1);
          padding: 1.25rem 1.5rem;
          display: flex; align-items: center; gap: 1rem;
          transition: border-color 0.2s;
          height: 100%;
        }
        .cert-card:hover { border-color: rgba(196,168,130,0.3); }
        .cert-icon { font-size: 1.2rem; color: var(--tan-dark); flex-shrink: 0; }
        .cert-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem; font-weight: 600;
          color: var(--cream); margin-bottom: 0.2rem;
        }
        .cert-source { font-size: 0.6rem; letter-spacing: 0.1em; color: var(--text-muted); }
        @media (max-width: 640px) {
          .project-skills-grid,
          .manual-skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            grid-auto-rows: 1fr; /* This forces all rows to match the tallest item */
            gap: 1rem;
          }
        }
      `}</style>

      <section className="page-section skills-page">
        <div className="section-label">// 002</div>
        <h2 className="section-title">Skills</h2>

         <div className="skills-subsection">
          <div className="skills-subsection-title">Certifications & Degrees</div>
          <div className="manual-skills-grid">
            {manualSkills.certifications.map((s) => (
              <div key={s.name} className="cert-card">
                <span className="cert-icon">✦</span>
                <div>
                  <div className="cert-name">{s.name}</div>
                  <div className="cert-source">{s.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-subsection">
          <div className="skills-subsection-title">From Projects & Research</div>
          <div className="project-skills-grid">
            {Object.entries(projectSkills).map(([skill, sources]) => (
              <div key={skill} className="project-skill-card">
                <div className="project-skill-name">{skill}</div>
                <div className="project-skill-sources">
                  {sources.map((s) => (
                    <a
                      key={s.slug}
                      className="project-skill-source"
                      href={`/projects/${s.slug}`}
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       

      </section>
    </>
  );
}