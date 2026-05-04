import { aboutData } from "../data/about";

export default function About() {
  return (
    <>
      <style>{`
        .page-section.about-page {
          background: var(--dark2);
          min-height: 100vh;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 2.8fr;
          gap: 5rem;
          align-items: start;
          margin-top: 2rem;
        }
        .about-left-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 8rem;
        }
        .about-image-frame {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: var(--dark3);
          border: 1px solid rgba(196,168,130,0.15);
          overflow: hidden;
        }
        .about-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        .about-tagline {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--tan);
          line-height: 1.6;
        }
        .about-right-col {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        .about-bio {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-muted);
        }
        .about-bio p { margin-bottom: 1.5rem; }
        .skill-group { margin-bottom: 2.5rem; }
        .skill-group-label {
          font-size: 0.55rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--tan-dark);
          margin-bottom: 1rem;
          display: block;
          border-bottom: 1px solid rgba(196,168,130,0.1);
          padding-bottom: 0.3rem;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .skill-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          color: var(--text-muted);
          border: 1px solid rgba(196,168,130,0.1);
          padding: 0.35rem 0.7rem;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-left-col { position: static; }
        }
      `}</style>

      <section className="page-section about-page">
        <div className="section-label">// 003</div>
        <h2 className="section-title">About</h2>

        <div className="about-grid">

          {/* LEFT: Photo & Tagline */}
          <div className="about-left-col">
            <div className="about-image-frame">
              <img src="/images/rys-corpuz.jpg" alt="Rys Corpuz" />
            </div>
            <div className="about-tagline">
              Rys Corpuz &nbsp;·&nbsp; Rockets &nbsp;·&nbsp; Radiation &nbsp;·&nbsp; Research
            </div>
          </div>

          {/* RIGHT: Biography & Skills */}
          <div className="about-right-col">
            <div className="about-bio">
              {aboutData.bio.map((paragraph, i) =>
                paragraph === "" ? (
                  <div key={i} style={{ marginBottom: "1rem" }} />
                ) : (
                  <p key={i}>{paragraph}</p>
                )
              )}
            </div>
 
            <div className="skills-block">
              <div className="skill-group">
                <span className="skill-group-label">Software & Simulation</span>
                <div className="skill-tags">
                  <span className="skill-tag">SolidWorks</span>
                  <span className="skill-tag">OpenRocket</span>
                  <span className="skill-tag">MATLAB</span>
                  <span className="skill-tag">CFD</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-group-label">Disciplines</span>
                <div className="skill-tags">
                  <span className="skill-tag">Astrodynamics</span>
                  <span className="skill-tag">Propulsion Systems</span>
                  <span className="skill-tag">Structural Analysis</span>
                  <span className="skill-tag">Flight Dynamics</span>
                  <span className="skill-tag">Trajectory Optimization</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-group-label">Fabrication</span>
                <div className="skill-tags">
                  <span className="skill-tag">Laser Cutting</span>
                  <span className="skill-tag">3D Modeling</span>
                  <span className="skill-tag">Pyrotechnic Systems</span>
                  <span className="skill-tag">L1 Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}