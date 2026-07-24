function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <img
            src="https://via.placeholder.com/350x420"
            alt="Lavi Kumar"
          />
        </div>

        <div className="about-right">

          <p className="section-title">
            ABOUT ME
          </p>

          <h2>
            Passionate Software & Game Developer
          </h2>

          <p>
            I'm Lavi Kumar, a second-year Computer Science Engineering student
            at Chandigarh University. I enjoy building modern websites,
            interactive applications, and immersive games using the latest
            technologies.
          </p>

          <p>
            My goal is to become a full-stack software engineer while exploring
            AI, game development, and cloud technologies.
          </p>

          <div className="about-info">

            <div>
              <h3>🎓 Education</h3>
              <p>B.E. Computer Science Engineering</p>
            </div>

            <div>
              <h3>📍 University</h3>
              <p>Chandigarh University</p>
            </div>

            <div>
              <h3>💻 Experience</h3>
              <p>Student Developer</p>
            </div>

            <div>
              <h3>🚀 Interests</h3>
              <p>Web • AI • Games</p>
            </div>

          </div>

          <button className="about-btn">
            Download Resume
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;