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
        "Project Astra is my ongoing Unity project for learning how a third-person game is built from the ground up. I use it as a practical space to experiment with movement, animation, camera systems, UI, and gameplay instead of learning each topic in isolation.",

      caseStudyText:
        "Astra started as a simple Unity prototype and is gradually becoming a more complete third-person experience. The main goal is to understand how the different parts of a game work together. I have been working on character movement, animation transitions, camera behaviour, UI, and the basic gameplay systems behind the experience.",

      caseStudyLearning:
        "The project has mainly helped me understand Unity workflows, C# scripting, animation systems, character controllers, and the small details that make movement feel better." ,

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
        "Kurukshetra was developed during AI Fest as a fast-paced 2D action game inspired by the Mahabharata. The project focused on getting the main gameplay loop working within a limited time while working as a team.",

      caseStudyText:
        "Kurukshetra is a 2D action game built in Godot during a university gameathon. The player fights through waves of enemies in a Mahabharata-inspired setting. Because the project had to be completed quickly, the team focused on the core gameplay, enemy behaviour, collisions, and making the prototype playable.",

      caseStudyLearning:
        "This project gave me practical experience with Godot, GDScript, gameplay logic, enemy spawning, debugging, and collaborating with a team under a deadline." ,

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
        "Instead of using a ready-made template, I chose to build this portfolio from scratch so I could improve both my frontend development and UI design skills.",

      caseStudyText:
        "This portfolio is a React-based project built to present my work, skills, and learning journey in a more interactive way. I designed the interface myself and used reusable components, responsive layouts, animations, and theme-based visuals to make the site feel more like a product than a simple profile page.",

      caseStudyLearning:
        "Building it has improved my understanding of React architecture, Framer Motion, Tailwind CSS, responsive design, component reuse, and how small interaction details affect the overall user experience." ,

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
    },
  ],
};