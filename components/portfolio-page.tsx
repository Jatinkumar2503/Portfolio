"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

import { achievements, certifications } from "@/data/achievements";
import { experience } from "@/data/experience";
import { profile, navigation } from "@/data/site";
import { projects } from "@/data/projects";
import { researchPapers } from "@/data/research";
import { socials } from "@/data/socials";
import { techStack } from "@/data/tech";
import { HeroScene } from "@/components/hero-scene";

const fadeInUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: string }) {
  return <span className="section-label">{children}</span>;
}

function ActionButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  const isExternal = href.startsWith("http");
  const Icon = variant === "primary" ? ArrowRight : MoveRight;

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`action-button ${variant}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      data-cursor-hover
    >
      <span>{children}</span>
      <Icon size={16} />
    </motion.a>
  );
}

function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onLeave = () => setHovering(false);
    const handleMouseEnter = () => setHovering(true);

    const controls = document.querySelectorAll("a, button, [data-cursor-hover]");
    controls.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", onLeave);
    });

    document.addEventListener("pointermove", onMove);

    return () => {
      document.removeEventListener("pointermove", onMove);
      controls.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="custom-cursor" aria-hidden="true">
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 6, y: position.y - 6, scale: hovering ? 1.3 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.45 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ x: position.x - 16, y: position.y - 16, scale: hovering ? 1.55 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      />
    </div>
  );
}

export default function PortfolioPage() {
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 });

  const handleHeroMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    setHeroOffset({ x: x * 18, y: y * 18 });
  };

  return (
    <div className="site-shell">
      <CustomCursor />

      <header className="topbar">
        <div className="topbar-inner shell-panel">
          <a href="#hero" className="brand-mark" data-cursor-hover>
            JATIN KUMAR
          </a>

          <nav className="topnav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} data-cursor-hover>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="status-pill">{profile.availability}</div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-grid shell-panel">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="eyebrow">{profile.tag}</p>
              <div className="hero-meta-row">
                <span className="hero-meta-item">{profile.student}</span>
                <a href={`mailto:${profile.email}`} className="hero-meta-item hero-email" data-cursor-hover>
                  {profile.email}
                </a>
              </div>
              <h1>{profile.name}</h1>
              <p className="hero-headline">{profile.headline}</p>
              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions">
                <ActionButton href="#work">EXPLORE WORK</ActionButton>
                <ActionButton href={`mailto:${profile.email}`} variant="secondary">EMAIL</ActionButton>
                <ActionButton href={socials.github} variant="secondary">GITHUB</ActionButton>
                <ActionButton href={socials.linkedin} variant="secondary">LINKEDIN</ActionButton>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, rotateX: -heroOffset.y * 0.1, rotateY: heroOffset.x * 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              onMouseMove={handleHeroMove}
              onMouseLeave={() => setHeroOffset({ x: 0, y: 0 })}
              style={{ transformPerspective: 1400 }}
            >
              <div className="hero-surface-glow" />
              <HeroScene />
            </motion.div>
          </div>
        </section>

        <section className="section-shell" id="about">
          <div className="section-heading">
            <SectionLabel>01 / ABOUT</SectionLabel>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p>
                Jatin works across artificial intelligence, machine learning, scientific computing,
                simulation, optimization, multi-agent systems, backend engineering, and applied research.
              </p>
              <p>
                The work is grounded in systems thinking: data-driven modeling, constrained planning,
                digital twins, real-time inference, and technical experimentation designed to solve hard
                operational problems without resorting to hype.
              </p>
            </motion.div>

            <motion.aside
              className="profile-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="panel-header">
                <span>PROFILE</span>
                <span className="panel-state">ACTIVE</span>
              </div>
              <div className="chip-row">
                {[
                  "CSE",
                  "AI / ML",
                  "RESEARCH",
                  "ENGINEERING",
                  "SIMULATION",
                ].map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="stats-list">
                <div>
                  <span className="mono">FOCUS</span>
                  <strong>AI + ENGINEERING</strong>
                </div>
                <div>
                  <span className="mono">STAGE</span>
                  <strong>RESEARCHER • SOFTWARE ENGINEER</strong>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="section-shell" id="work">
          <div className="section-heading">
            <SectionLabel>02 / SELECTED SYSTEMS</SectionLabel>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className={`project-shell ${project.tone}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.005 }}
              >
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-header">
                    <span className="mono">MODEL / {project.name}</span>
                    <span className="dot" />
                  </div>

                  <div className="visual-grid visual-grid-compact">
                    {Array.from({ length: 5 }).map((_, cellIndex) => {
                      const imageSrc = project.previewImages[cellIndex % project.previewImages.length];

                      return (
                        <motion.div
                          key={`${project.name}-${imageSrc}-${cellIndex}`}
                          className="visual-cell"
                          animate={{
                            opacity: [0.55, 1, 0.7],
                            scale: [0.98, 1, 0.99],
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 2.8 + cellIndex * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: cellIndex * 0.1,
                          }}
                          style={{
                            animationDelay: `${cellIndex * 0.15}s`,
                          }}
                        >
                          <Image
                            src={imageSrc}
                            alt={`${project.name} project system preview`}
                            fill
                            sizes="(max-width: 768px) 50vw, 14vw"
                            className="visual-image"
                          />
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="visual-footer">
                    <div>
                      <span className="mono">FLOW</span>
                      <strong>{project.name}</strong>
                    </div>
                    <div>
                      <span className="mono">STATE</span>
                      <strong>ACTIVE</strong>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-heading-row">
                    <div>
                      <p className="mono project-kicker">SYSTEM / {project.name}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.href} data-cursor-hover className={link.primary ? "primary-link" : ""}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-details">
                    <div>
                      <span className="mono">PROBLEM</span>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <span className="mono">APPROACH</span>
                      <p>{project.approach}</p>
                    </div>
                  </div>

                  <div className="architecture-block">
                    <span className="mono">ARCHITECTURE</span>
                    <div className="architecture-list">
                      {project.architecture.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="metrics-grid">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="metric-card">
                        <div className="mono metric-label">{metric.label}</div>
                        <strong>{metric.value}</strong>
                        <small>{metric.detail}</small>
                      </div>
                    ))}
                  </div>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="research">
          <div className="section-heading">
            <SectionLabel>03 / RESEARCH</SectionLabel>
          </div>

          <div className="research-grid">
            {researchPapers.map((paper, index) => (
              <motion.article
                key={paper.id}
                className="research-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="paper-meta">
                  <span className="mono">{paper.id}</span>
                  <span className="paper-status">{paper.status}</span>
                </div>
                <h3>{paper.title}</h3>
                <p className="paper-summary">{paper.summary}</p>
                <div className="paper-footer">
                  <span className="mono">DOI: {paper.doi}</span>
                  <div className="paper-links">
                    {paper.doi !== "TBD" ? (
                      <a href={`https://dx.doi.org/${paper.doi}`} data-cursor-hover>
                        READ PAPER
                      </a>
                    ) : null}
                    <a href={socials.orcid} data-cursor-hover>
                      ORCID
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="experience">
          <div className="section-heading">
            <SectionLabel>04 / EXPERIENCE</SectionLabel>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <motion.div
                key={item.period}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="mono timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="signal">
          <div className="section-heading">
            <SectionLabel>05 / SIGNAL</SectionLabel>
          </div>

          <div className="signal-grid">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                className="signal-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="certifications">
          <div className="section-heading">
            <SectionLabel>06 / CERTIFICATIONS</SectionLabel>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <span className="mono cert-type">{cert.type}</span>
                <strong>{cert.name}</strong>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="technology">
          <div className="section-heading">
            <SectionLabel>07 / TECHNOLOGY</SectionLabel>
          </div>

          <div className="tech-grid">
            {techStack.map((group) => (
              <div key={group.title} className="tech-card">
                <span className="mono">{group.title}</span>
                <div className="tech-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="code">
          <div className="section-heading">
            <SectionLabel>07 / CODE</SectionLabel>
          </div>

          <div className="code-panel">
            <div className="code-profile-row">
              <div className="profile-badge">
                <span className="github-mark">GH</span>
                <span>GitHub</span>
              </div>
              <a href={socials.github} className="mono" data-cursor-hover>
                github.com/Jatinkumar2503
              </a>
            </div>

            <div className="repo-grid">
              {[
                { name: "NEXUS AI", tag: "Multi-agent dispatching" },
                { name: "PRAJNA", tag: "Physics-constrained research" },
                { name: "PRAGATI AI", tag: "Industrial optimization" },
              ].map((repo) => (
                <div key={repo.name} className="repo-card">
                  <div className="repo-topline">
                    <span className="mono">{repo.name}</span>
                    <span className="dot" />
                  </div>
                  <p>{repo.tag}</p>
                  <a href={socials.github} data-cursor-hover>
                    OPEN REPOSITORY <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>

            <p className="code-note mono">
              Contribution activity is not fetched automatically here; the GitHub profile remains the
              primary source of truth.
            </p>
          </div>
        </section>

        <section className="contact-block" id="contact">
          <div className="shell-panel contact-panel">
            <div className="section-heading compact">
              <SectionLabel>08 / CONTACT</SectionLabel>
            </div>
            <h2>BUILD SOMETHING SERIOUS.</h2>
            <p>
              For research, engineering, internships, collaborations, or technically ambitious projects.
            </p>
            <div className="contact-actions">
              {socials.email ? (
                <ActionButton href={`mailto:${socials.email}`}>EMAIL</ActionButton>
              ) : null}
              <ActionButton href={socials.github} variant="secondary">GITHUB</ActionButton>
              <ActionButton href={socials.linkedin} variant="secondary">LINKEDIN</ActionButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
