import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LK</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
  href="/resume.pdf"
  className="resume-btn"
  target="_blank"
  rel="noreferrer"
>
  Resume
</a>
    </nav>
  );
}

export default Navbar;