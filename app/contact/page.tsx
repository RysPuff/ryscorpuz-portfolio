export default function Contact() {
  return (
    <section className="page-section" 
      style={{ background: "linear-gradient(160deg, var(--dark) 0%, var(--purple-muted) 100%)" }}>
      <div className="section-label">// 004</div>
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Interested in collaborating on aerospace projects, research, or just want to talk rockets?
        I&apos;d love to hear from you.
      </p>
      
      {/* <div className="contact-links">
        Uncomment or use your real email here 
        <a className="contact-link" href="mailto:ryscorpuz@example.com">
          <span className="contact-link-label">Email</span>
          <span className="contact-link-value">ryscorpuz@uci.edu</span>
        </a>

        <a className="contact-link" href="https://github.com/RysPuff" target="_blank" rel="noopener noreferrer">
          <span className="contact-link-label">GitHub</span>
          <span className="contact-link-value">github.com/RysPuff</span>
        </a>
        */}

      <div className="contact-links">
        <a className="contact-link" href="https://linkedin.com/in/ryscorpuz" target="_blank" rel="noopener noreferrer">
          <span className="contact-link-label">LinkedIn</span>
          <span className="contact-link-value">linkedin.com/in/shira-rys-corpuz</span>
        </a>
      </div>
    </section>
  );
}