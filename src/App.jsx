import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="app">
        <div className="hero" id="home">
          <p className="greeting">👋 Hello, I'm</p>

          <h1>Lavi Kumar</h1>

          <h2>Software Developer • Web Developer • Game Developer</h2>

          <p className="description">
            Welcome to my digital realm.
            <br />
            Building modern websites, immersive games, and innovative software.
          </p>

          <button className="hero-btn">Explore My Work</button>
        </div>
      </div>

      {/* About Section */}
      <About />
    </>
  );
}

export default App;
