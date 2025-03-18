import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "IT GİBİ AMA DEĞİL",
      company: "Boğaziçi Yazılım",
      period: "2023 - Present",
      location: "Ankara, Turkey",
      description:
        "NX GÜZEL DİYİP İNSANLARA NX SATMA İŞİ",
    },
    {
      title: "Engineering Intern",
      company: "NEREYDİ LA O",
      period: "2022",
      location: "Ankara, Turkey",
      description:
        "VALLA HER GÜN GİTTİM AMA BİLMİYOM",
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-divider"></div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>

                <div className="timeline-meta">
                  <div className="meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

