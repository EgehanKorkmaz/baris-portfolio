import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Barış Göktaş. All rights reserved.
        </p>
        <p className="footer-credit">
          Designed with by
          {" "}
          <a
            href="https://github.com/EgehanKorkmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Egehan Korkmaz
          </a>
          {" "}💻
        </p>
      </div>
    </footer>
  )
}

export default Footer

