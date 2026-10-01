// Theme-aware portfolio copy.
// About content intentionally lives in the personalization layer so the
// section structure can remain stable while every theme gets its own identity.
// Facts are identical across all themes; tone differs per theme.
// "clarity", "less but better" and "intention" each appear at most once site-wide.

const commonServices = {
  web: {
    title: "React Development",
    description:
      "I build responsive websites and web apps with React, Tailwind CSS and Framer Motion, like this portfolio.",
  },
  software: {
    title: "Software Development",
    description:
      "I write applications and tools that solve real problems. My focus is maintainable code that scales.",
  },
  game: {
    title: "Unity & Godot Games",
    description:
      "I create interactive experiences in Unity (Project Astra) and Godot (Kurukshetra hackathon project).",
  },
  ai: {
    title: "AI Integration",
    description:
      "I explore AI tools and workflows to build smarter solutions and improve development processes.",
  },
};

const commonStats = [
  { number: "2+", label: "Years Learning", icon: "calendar" },
  { number: "8", label: "Core Technologies", icon: "brain" },
  { number: "3", label: "Featured Projects", icon: "target" },
  { number: "2", label: "Game Engines", icon: "rocket" },
];

export const copy = {
  ocean: {
    hero: {
      badge: "Software Engineer • Game Developer",
      title: "Building software that works and feels right.",
      subtitle:
        "I develop web applications, interactive games, and tools that solve real problems. Currently focused on React, Unity, and learning through hands-on projects.",
    },
    about: {
      title: "From Chandigarh University to Real Projects.",
      description:
        "I'm a Computer Science student who learns by building. I enjoy turning ideas into working software, whether it's a responsive website, a Unity game, or an experiment with new technology.",
      cta: "Let's build something together.",
      beliefTitle: "What Drives Me",
      beliefHighlight: "Good software solves real problems for real people.",
      beliefBody:
        "I believe in learning by doing, writing code that others can understand, and building things that actually get used.",
      servicesTitle: "Technologies I work with",
      servicesDescription:
        "From web development with React to game development with Unity, I enjoy exploring different areas of software engineering.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Unity, React, and Godot Projects',
      description: 'A collection of projects built while learning game development, web development, and software engineering fundamentals.',
      cta: 'See the work.',
    },
    contact: {
      heading: "NEXT PROJECT",
      quote: [
        "Every project starts with understanding the problem.",
        "The best solutions come from careful thinking and iterative building.",
        "I'm ready to tackle the next challenge.",
      ],
      footer: [
        "Whether it's web development, game development, or something new entirely,",
        "let's discuss what we can build together.",
      ],
      button: "Start the Conversation",
      signature: "Built with curiosity.",
    },
  },

  midnight: {
    hero: {
      badge: "Software Engineer • Systems Builder",
      title: "Engineering with precision.",
      subtitle:
        "Clean architecture, thoughtful design, systematic problem-solving. I build software that scales and systems that last.",
    },
    about: {
      title: "Building Systems That Scale.",
      description:
        "I approach development methodically: understand the requirements, design the architecture, implement with care. My focus is on creating maintainable systems that solve problems correctly.",
      cta: "Let's engineer something robust.",
      beliefTitle: "The Engineering Approach",
      beliefHighlight: "Good architecture makes everything else possible.",
      beliefBody:
        "I value systematic thinking, clear code organization, and building systems that remain understandable as they grow in complexity.",
      servicesTitle: "Engineered solutions",
      servicesDescription:
        "I build software with attention to architecture, performance, and long-term maintainability across web and game development.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Engineered Projects',
      description: 'Software built with attention to architecture, testing, and maintainability. Each project taught me something about systematic development.',
      cta: 'Examine the systems.',
    },
    contact: {
      heading: "SYSTEMATIC COLLABORATION",
      quote: [
        "Every complex system starts with clear requirements.",
        "The right architecture makes difficult problems manageable.",
        "I apply this thinking to every project.",
      ],
      footer: [
        "If you're building something that needs to scale,",
        "let's discuss the architecture together.",
      ],
      button: "Plan the System",
      signature: "Built systematically.",
    },
  },
  emerald: {
    hero: {
      badge: "Software Engineer • Game Developer",
      title: "Learning by building in Unity, Godot and React.",
      subtitle:
        "Every project teaches me something new. I experiment, iterate, and gradually turn rough ideas into working software.",
    },
    about: {
      title: "Growing Through Godot, Unity and React.",
      description:
        "I learn by building real projects. From a Mahabharata-inspired Godot game built during Kurukshetra hackathon to a growing Unity third-person controller, each project pushes my understanding further.",
      cta: "Let's grow an idea together.",
      beliefTitle: "Always Learning",
      beliefHighlight: "Every project is a chance to understand something deeper.",
      beliefBody:
        "I believe curiosity and reflection compound over time. Each build teaches me something I can apply to the next one.",
      servicesTitle: "What I'm building and learning",
      servicesDescription:
        "Projects that give me room to explore new tools, iterate on ideas, and discover better solutions along the way.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Unity, Godot and React Builds',
      description: 'Projects at different stages of development, each one a step forward in game development, web development or software engineering.',
      cta: 'See what is growing.',
    },
    contact: {
      heading: "START SOMETHING NEW",
      quote: [
        "Every useful project started as an idea worth exploring.",
        "The best ones grow through collaboration and iteration.",
      ],
      footer: ["Let's start the next one together."],
      button: "Let's Build",
      signature: "Always learning.",
    },
  },

  light: {
    hero: {
      badge: "Software Engineer",
      title: "Software that solves real problems.",
      subtitle:
        "I build websites, games and applications with a focus on usability, performance and code that stays maintainable.",
    },
    about: {
      title: "React, Unity and Chandigarh University.",
      description:
        "I'm a CS student who focuses on solving concrete problems. My goal is software that is straightforward to use and easy to maintain.",
      cta: "Let's make something useful.",
      beliefTitle: "What I Focus On",
      beliefHighlight: "Less but better: fewer features done right beat many done poorly.",
      beliefBody:
        "I try to understand the problem fully before writing code. Every element in a design should earn its place.",
      servicesTitle: "Focused on what matters",
      servicesDescription:
        "Clean interfaces, solid architecture and experiences built to be useful before they are decorative.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'React and Unity Projects',
      description: 'A focused collection of practical builds where usability and maintainability come before decoration.',
      cta: 'See the work.',
    },
    contact: {
      heading: "AVAILABLE NOW",
      quote: [
        "I'm a CS student looking for opportunities to contribute.",
        "Whether it's a short project or a longer collaboration, I'm ready to work.",
      ],
      footer: [
        "Reach out and let's discuss what you need.",
      ],
      button: "Send a Message",
      signature: "Built to last.",
    },
  },

  blossom: {
    hero: {
      badge: "Software Engineer • Creative Developer",
      title: "Technology built for people.",
      subtitle:
        "I combine React, Unity and Godot to build experiences that are welcoming, enjoyable and genuinely useful.",
    },
    about: {
      title: "Building Experiences People Enjoy Using.",
      description:
        "Good software isn't only about whether it works. It's also about whether it feels approachable, intuitive and worth coming back to. That's what I aim for in every project.",
      cta: "Let's create something people remember.",
      beliefTitle: "What I Care About",
      beliefHighlight: "Software is more useful when it respects the people using it.",
      beliefBody:
        "I pay attention to the details that make products feel thoughtful: clear interactions, honest feedback and experiences that don't get in the way.",
      servicesTitle: "Built with the user in mind",
      servicesDescription:
        "From React web apps to Unity game experiences, I build things that are easy to pick up and enjoyable to use.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Projects Built for People',
      description: 'Interactive builds where thoughtful design and useful technology come together to create experiences worth returning to.',
      cta: 'Discover the work.',
    },
    contact: {
      heading: "LET'S CREATE TOGETHER",
      quote: [
        "Good projects start with understanding what people need.",
        "I'd love to hear about yours.",
      ],
      footer: ["Let's make something worth building."],
      button: "Start a Conversation",
      signature: "Built with care.",
    },
  },

  crimson: {
    hero: {
      badge: "The Crimson Sword",
      title: "Forged through discipline.",
      subtitle:
        "Every line of code is a deliberate choice. Project Astra, Kurukshetra, this portfolio. Each one refined through iteration.",
    },
    about: {
      title: "Forged in Unity, Godot and React.",
      description:
        "I approach development as a craft. I study the problem, build a solution, and refine until the result is something I'm proud to put my name on.",
      cta: "Let's build something worth signing.",
      beliefTitle: "The Craft",
      beliefHighlight: "Intention separates craft from noise.",
      beliefBody:
        "Anyone can ship code. The discipline is in the refinement: the choices that make the final experience coherent, considered and unmistakably yours.",
      servicesTitle: "Built with deliberate intent",
      servicesDescription:
        "Disciplined systems, sharp interfaces and game experiences built through careful iteration, not decoration.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Forged Projects',
      description: 'Unity, Godot and React builds refined through iteration and discipline. Each one has a deliberate signature.',
      cta: 'Enter the forge.',
    },
    contact: {
      heading: "THE NEXT FORGE",
      quote: [
        "Every developer writes code.",
        "Few refine it into something with a signature.",
        "I'm working toward that.",
      ],
      footer: [
        "If precision and craft matter to you,",
        "let's talk about what we can build together.",
      ],
      button: "Start the Next Chapter",
      signature: "Forged with intent.",
    },
  },
};
