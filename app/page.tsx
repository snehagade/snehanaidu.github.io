/* eslint-disable @next/next/no-img-element */

const Arrow = () => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  name: "Sneha Naidu Gade",
  honorificSuffix: "MD",
  jobTitle: "Board-Certified Pediatrician",
  url: "https://snehagade.com",
  sameAs: ["https://www.linkedin.com/in/gadesneha/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "SUNY Downstate Health Sciences University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Jawaharlal Nehru Medical College",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sneha Gade, MD — home">
          Sneha Gade, MD
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#scholarship">Scholarship</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#scholarship">Scholarship</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">
              Board-certified pediatrician <span aria-hidden="true">•</span>{" "}
              Phoenix, Arizona
            </p>

            <h1 id="hero-heading">
              Clinical care,
              <br />
              guided by curiosity.
            </h1>

            <p className="hero-intro">
              I&apos;m Sneha Naidu Gade, a pediatrician caring for children and
              newborns across the Phoenix community, with a focused interest in
              congenital heart disease and cardiac imaging.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                Explore my work
                <Arrow />
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/gadesneha/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <Arrow />
              </a>
            </div>

            <ul className="specialty-list" aria-label="Areas of focus">
              <li>Pediatrics</li>
              <li>Newborn care</li>
              <li>Pediatric cardiology</li>
            </ul>
          </div>

          <div className="hero-art" aria-hidden="true">
            <img
              src="/warm-organic-art.webp"
              alt=""
              width="1200"
              height="1500"
            />
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">
            <span>01</span>
            About
          </div>

          <div className="about-grid">
            <div>
              <p className="eyebrow">A whole-child perspective</p>
              <h2>Care begins with understanding the full story.</h2>
            </div>

            <div className="about-copy">
              <p className="lead-copy">
                My work is grounded in careful observation, clear communication,
                and respect for the family behind every clinical decision.
              </p>
              <p>
                I completed pediatrics residency at SUNY Downstate in Brooklyn
                and now practice in a Phoenix safety-net setting, caring for
                children from birth through adolescence. Working with families
                across languages, cultures, and varied access to care has made
                me a more attentive clinician and advocate.
              </p>
              <p>
                Alongside general pediatrics and newborn care, I have continued
                to deepen my study of pediatric cardiology through clinical
                observerships, focused education, and quality-improvement work.
                I am especially drawn to congenital heart disease,
                echocardiography, and the way imaging clarifies physiology at
                the bedside.
              </p>
            </div>
          </div>

          <div className="fact-row" aria-label="Professional highlights">
            <article>
              <strong>Board certified</strong>
              <span>American Board of Pediatrics</span>
            </article>
            <article>
              <strong>Phoenix based</strong>
              <span>Community pediatrics and newborn care</span>
            </article>
            <article>
              <strong>Four languages</strong>
              <span>English, Hindi, Spanish, and Telugu</span>
            </article>
          </div>
        </section>

        <section className="section focus-section" aria-labelledby="focus-title">
          <div className="section-label section-label-light">
            <span>02</span>
            Practice &amp; focus
          </div>

          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-light">Clinical practice</p>
              <h2 id="focus-title">From first breaths to growing independence.</h2>
            </div>
            <p>
              A broad foundation in pediatrics continues to shape how I ask
              questions, recognize change, and connect physiology to the child
              in front of me.
            </p>
          </div>

          <div className="focus-grid">
            <article>
              <span className="card-number">01</span>
              <h3>Comprehensive pediatrics</h3>
              <p>
                Preventive, acute, and chronic care for children and adolescents
                in a culturally and linguistically diverse community.
              </p>
            </article>
            <article>
              <span className="card-number">02</span>
              <h3>Newborn care</h3>
              <p>
                Level II nursery rounding for late-preterm and at-risk newborns,
                with close attention to safe transition home.
              </p>
            </article>
            <article>
              <span className="card-number">03</span>
              <h3>Pediatric cardiology</h3>
              <p>
                Focused study of congenital heart disease, hemodynamics, and
                cardiac imaging through clinical observation and scholarship.
              </p>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-label">
            <span>03</span>
            Experience
          </div>

          <div className="section-heading">
            <p className="eyebrow">Clinical journey</p>
            <h2>Built across communities, systems, and stages of childhood.</h2>
          </div>

          <div className="experience-layout">
            <ol className="timeline">
              <li>
                <div className="timeline-date">2023 — Present</div>
                <div className="timeline-content">
                  <p className="timeline-org">Mountain Park Health Center</p>
                  <h3>General Pediatrician</h3>
                  <p>
                    Comprehensive outpatient pediatrics and Level II nursery
                    care in metropolitan Phoenix, serving predominantly
                    low-income, Spanish-speaking, and immigrant families.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-date">2026 — Present</div>
                <div className="timeline-content">
                  <p className="timeline-org">Banner Desert Medical Center</p>
                  <h3>Pediatric Cardiology Clinical Observer</h3>
                  <p>
                    Ongoing observation in a high-volume outpatient cardiology
                    clinic and catheterization lab, with exposure to congenital
                    and acquired heart disease and echocardiographic reasoning.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-date">June 2026</div>
                <div className="timeline-content">
                  <p className="timeline-org">Phoenix Children&apos;s</p>
                  <h3>Inpatient Pediatric Cardiology Observer</h3>
                  <p>
                    Immersive exposure to postoperative congenital heart disease
                    care, single-ventricle physiology, echocardiography review,
                    and multidisciplinary planning.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-date">2020 — 2023</div>
                <div className="timeline-content">
                  <p className="timeline-org">
                    SUNY Downstate Health Sciences University
                  </p>
                  <h3>Pediatrics Residency</h3>
                  <p>
                    Trained in Brooklyn across SUNY Downstate and Kings County
                    Hospital, caring for children with broad medical and social
                    complexity.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-date">2019</div>
                <div className="timeline-content">
                  <p className="timeline-org">Children&apos;s Hospital Colorado</p>
                  <h3>Pediatric Cardiology Elective</h3>
                  <p>
                    Inpatient and outpatient cardiology experience, including
                    arrhythmia procedures, Kawasaki disease care, and rural
                    outreach clinics in Wyoming.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="credentials" aria-label="Education and credentials">
              <p className="credentials-title">Training &amp; credentials</p>
              <dl>
                <div>
                  <dt>Board certification</dt>
                  <dd>American Board of Pediatrics</dd>
                </div>
                <div>
                  <dt>Residency</dt>
                  <dd>SUNY Downstate, Pediatrics</dd>
                </div>
                <div>
                  <dt>Medical education</dt>
                  <dd>Jawaharlal Nehru Medical College</dd>
                </div>
                <div>
                  <dt>Professional community</dt>
                  <dd>AAP · AzAAP · AAPI</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section scholarship-section" id="scholarship">
          <div className="section-label">
            <span>04</span>
            Scholarship
          </div>

          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Questions into action</p>
              <h2>Practical work designed to improve everyday care.</h2>
            </div>
            <p>
              My current projects sit close to clinical practice: clearer
              documentation, safer prescribing, and systems that help the right
              patient receive the right follow-up.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card project-card-featured">
              <div>
                <span className="project-type">Education initiative · 2026</span>
                <h3>Perimembranous VSD documentation &amp; follow-up</h3>
              </div>
              <p>
                Developing provider education on anatomic specificity,
                associated complications, and the importance of ongoing
                cardiology surveillance for perimembranous ventricular septal
                defects.
              </p>
            </article>

            <article className="project-card">
              <div>
                <span className="project-type">Quality improvement · Ongoing</span>
                <h3>Medication stewardship in pediatric URI care</h3>
              </div>
              <p>
                Co-investigator on an EHR-informed initiative evaluating
                antibiotic and over-the-counter medication prescribing across
                387 pediatric URI encounters.
              </p>
            </article>

            <article className="project-card">
              <div>
                <span className="project-type">Quality improvement · 2022–2023</span>
                <h3>Nutrition and activity screening</h3>
              </div>
              <p>
                Helped design and implement PDSA-based interventions to improve
                use of a structured nutrition and physical-activity assessment
                in pediatric primary care.
              </p>
            </article>
          </div>

          <div className="publications">
            <div>
              <p className="eyebrow">Selected publications</p>
              <h3>Early work in adolescent nutrition and health behavior.</h3>
            </div>
            <ol>
              <li>
                <span>2017 · First author</span>
                <a
                  href="https://www.ijmsph.org/index.php?mno=234115"
                  target="_blank"
                  rel="noreferrer"
                >
                  Psychological factors affecting dietary habits of
                  college-going adolescents
                  <Arrow />
                </a>
              </li>
              <li>
                <span>2015 · Co-author</span>
                <a
                  href="https://www.recentscientific.com/sites/default/files/2115.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dietary pattern of college-going adolescents in urban
                  Belagavi
                  <Arrow />
                </a>
              </li>
            </ol>
          </div>
        </section>

        <section className="personal-note" aria-labelledby="personal-title">
          <div className="personal-number" aria-hidden="true">
            05
          </div>
          <div>
            <p className="eyebrow">Beyond medicine</p>
            <h2 id="personal-title">Movement, rhythm, and a wider world.</h2>
            <p>
              I have trained in Kuchipudi and Bharatanatyam since childhood and
              still find joy in every form of movement—from dance and Zumba to
              Pilates, trekking, and travel.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Professional correspondence</p>
            <h2>Let&apos;s connect.</h2>
            <p>
              I welcome conversations about pediatric care, clinical education,
              scholarship, and pediatric cardiology.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="mailto:snehanaidu.gade@gmail.com"
            >
              Send an email
              <Arrow />
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/gadesneha/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Sneha Naidu Gade, MD</p>
        <p>Board-certified pediatrician · Phoenix, Arizona</p>
        <p>© 2026</p>
      </footer>
    </>
  );
}
