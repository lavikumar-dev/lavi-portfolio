import "../styles/About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <div className="image-placeholder">
            LK
          </div>
        </div>

        <div className="about-content">

          <h2>About Me</h2>

          <p>
            I'm <strong>Lavi Kumar</strong>, a Computer Science Engineering
            student passionate about building modern websites, immersive games,
            and practical software solutions.
          </p>

          <p>
            I enjoy learning new technologies and turning ideas into real
            projects. My goal is to become a skilled Full Stack Developer and
            Game Developer while creating products that people genuinely enjoy
            using.
          </p>

          <div className="about-cards">

            <div className="card">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>

            <div className="card">
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div className="card">
              <h3>∞</h3>
              <p>Curiosity</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;