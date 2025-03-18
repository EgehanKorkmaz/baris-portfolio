import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <h1 className="hero-title">
          <span>Barış Göktaş</span>
          <span className="hero-subtitle">Aeronautical Engineer</span>
        </h1>
        <p className="hero-description">
          Designing the future of aviation through innovative engineering and software development
        </p>
        <div className="hero-cta">
          <a href="#about" className="cta-button">
            Discover More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero

