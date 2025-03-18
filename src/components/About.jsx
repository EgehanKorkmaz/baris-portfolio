import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="about-content">
          <div className="about-image">
            <img src="/src/resources/BarisGoktas.jpg" alt="Barış Göktaş" />
          </div>

          <div className="about-text">
            <h3 className="about-heading">Hello, I'm Barış</h3>
            <p className="about-description">
              I'm a graduate in Aeronautical Engineering from Türk Hava Kurumu University with a passion for aircraft design. Currently working at Boğaziçi Yazılım.
            </p>

            <div className="about-details">
              <div className="detail-item">
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
                  className="detail-icon"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>Aeronautical Engineering, Türk Hava Kurumu University</span>
              </div>
              <div className="detail-item">
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
                  className="detail-icon"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>BARIŞ İŞİNİN ADI NE AMK at Boğaziçi Yazılım</span>
              </div>
              <div className="detail-item">
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
                  className="detail-icon"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Ankara, Turkey</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="cta-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About