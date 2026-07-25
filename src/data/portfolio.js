import astraImg from "../assets/images/astra.png";
import kurukshetraImg from "../assets/images/kurukshetra.jpeg";
import portfolioImg from "../assets/images/portfolio.png";

export const portfolio = {
  name: "Lavi Kumar",

  roles: [
    "Software Developer",
    "Web Developer",
    "Game Developer",
    "AI Enthusiast",
  ],

  tagline: "Turning ideas into projects, one step at a time.",

  description:
    "I'm a Computer Science Engineering student passionate about developing modern web applications, interactive games, and AI-powered solutions. I enjoy solving real-world problems and continuously learning new technologies.",

  email: "lavikum789@gmail.com",

  location: "Chandigarh University, Punjab",

  socials: {
    github: "https://github.com/lavikumar-dev",
    linkedin: "https://www.linkedin.com/in/lavi-kumar-793042424/",
    instagram: "#",
  },

  buttons: {
    primary: "View Projects",
    secondary: "Contact Me",
  },

  stats: [
    {
      number: "5+",
      label: "Projects Built",
    },
    {
      number: "2+",
      label: "Years Learning",
    },
  ],

  projects: [
    {
      id: 1,

      featured: true,

      title: "Project Astra",

      subtitle:
        "Building a third-person Unity experience from scratch.",

      category: "3D Game Prototype",

      image: astraImg,

      status: "In Progress",

      duration: "2026 • Personal Project",

      metadata: [
        "Unity",
        "Third Person",
        "Character Controller",
        "2026",
      ],

      tech: [
        "Unity",
        "C#",
        "Animator",
        "Blend Trees",
        "Character Controller",
        "UI",
      ],

      description:
        "A personal Unity project focused on learning third-person game development. Through this project, I'm exploring character movement, animations, camera systems, UI, and gameplay mechanics while continuously improving my game development skills.",

      overview:
        "Project Astra is my largest ongoing Unity project. It serves as a learning playground where I experiment with modern game development concepts while gradually building a polished third-person experience.",

      highlights: [
        "Third-person controller",
        "Animation system",
        "Camera controller",
        "UI framework",
      ],

      challenges: [
        "Character movement",
        "Animation transitions",
        "Camera clipping",
        "State management",
      ],

      learned: [
        "Unity workflow",
        "C# architecture",
        "Animation systems",
        "Game programming fundamentals",
      ],

      gallery: [
        astraImg,
        astraImg,
        astraImg,
      ],

      github: "#",

      demo: "#",
    },

    {
      id: 2,

      featured: false,

      title: "Kurukshetra",

      subtitle:
        "A Mahabharata-inspired action game built during AI Fest.",

      category: "2D Action Game",

      image: kurukshetraImg,

      status: "Completed",

      duration: "AI Fest • Team Project",

      metadata: [
        "Mahabharata Inspired",
        "Godot 4",
        "AI Fest Gameathon",
        "Team Project",
      ],

      tech: [
        "Godot",
        "GDScript",
        "2D Game",
        "Game Design",
      ],

      description:
        "Built during a university hackathon, this Godot project is inspired by the Mahabharata. It helped me understand gameplay logic, collision detection, enemy behavior, and event-driven programming while collaborating in a team.",

      overview:
        "Kurukshetra was developed within a limited time during AI Fest. The project strengthened my understanding of teamwork, rapid prototyping, and game mechanics under deadlines.",

      highlights: [
        "Enemy AI",
        "Combat mechanics",
        "Wave spawning",
        "Collision detection",
      ],

      challenges: [
        "Balancing gameplay",
        "Enemy spawning",
        "Time constraints",
        "Team coordination",
      ],

      learned: [
        "Godot Engine",
        "Gameplay architecture",
        "Debugging",
        "Hackathon collaboration",
      ],

      gallery: [
        kurukshetraImg,
        kurukshetraImg,
        kurukshetraImg,
      ],

      github: "#",

      demo: "#",
    },

    {
      id: 3,

      featured: false,

      title: "Personal Portfolio",

      subtitle:
        "Designing a modern portfolio that reflects my journey as a developer.",

      category: "React Website",

      image: portfolioImg,

      status: "Ongoing",

      duration: "2026",

      metadata: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],

      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],

      description:
        "A modern portfolio website built to showcase my learning journey and projects. Creating this portfolio has helped me strengthen my React, Tailwind CSS, Framer Motion, and UI design skills.",

      overview:
        "Instead of using a template, I chose to design and build this portfolio from scratch to improve both my frontend development and UI design skills.",

      highlights: [
        "Responsive UI",
        "Modern animations",
        "Reusable components",
        "Dark theme",
      ],

      challenges: [
        "Responsive layouts",
        "Component architecture",
        "Animation timing",
        "Visual consistency",
      ],

      learned: [
        "React architecture",
        "Framer Motion",
        "Tailwind CSS",
        "UI/UX thinking",
      ],

      gallery: [
        portfolioImg,
        portfolioImg,
        portfolioImg,
      ],

      github: "#",

      demo: "#",
    },
  ],
};