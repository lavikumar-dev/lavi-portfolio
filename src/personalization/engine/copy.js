// Theme-aware portfolio copy.
// About content intentionally lives in the personalization layer so the
// section structure can remain stable while every theme gets its own identity.

const commonServices = {
  web: {
    title: "Web Development",
    description:
      "I build responsive, fast and modern websites using React, Tailwind CSS and practical frontend patterns.",
  },
  software: {
    title: "Software Development",
    description:
      "I enjoy building efficient applications and tools that solve real-world problems with clean, maintainable code.",
  },
  game: {
    title: "Game Development",
    description:
      "I create interactive games using Unity and Godot, with a focus on gameplay, mechanics and player experience.",
  },
  ai: {
    title: "AI & Innovation",
    description:
      "I explore AI tools and emerging technologies to build smarter workflows and more useful digital experiences.",
  },
};

const commonStats = [
  { number: "1+", label: "Years Learning", icon: "calendar" },
  { number: "15+", label: "Technologies Explored", icon: "brain" },
  { number: "5+", label: "Projects Built", icon: "target" },
  { number: "∞", label: "Curiosity Unlocked", icon: "rocket" },
];

export const copy = {
  ocean: {
    hero: {
      badge: "Software Engineer • Game Developer",
      title: "Building software that people remember.",
      subtitle:
        "I design and develop modern web experiences, interactive applications, and games with equal focus on performance, usability, and craftsmanship.",
    },
    about: {
      title: "Turning Ideas Into Impactful Experiences.",
      description:
        "I'm a Computer Science student and passionate developer who loves turning ideas into real, useful digital experiences. I enjoy building websites, games, and applications that solve problems and feel intentional.",
      cta: "Let's build something amazing together.",
      beliefTitle: "What I Believe",
      beliefHighlight: "Good software is not just about code. It's about people, experiences, and impact.",
      beliefBody:
        "I believe in continuous learning, clean design, and writing code that's maintainable, scalable, and valuable.",
      servicesTitle: "I build digital experiences",
      servicesDescription:
        "From clean user interfaces to powerful backends and immersive games, I enjoy building products that are functional, beautiful and user-focused.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Selected Projects',
      description: 'A collection of builds shaped by curiosity, interaction, and a focus on experiences that feel as good as they function.',
      cta: 'Explore the work.',
    },
    contact: {
      heading: "THE NEXT CHAPTER",
      quote: [
        "Good software works.",
        "Great software stays with people long after they close it.",
        "I'm here to build the second kind.",
      ],
      footer: [
        "Every project begins with a conversation.",
        "Maybe this one begins with yours.",
      ],
      button: "Start the Conversation",
      signature: "Crafted with curiosity.",
    },
  },

  midnight: {
    hero: {
      badge: "Software Engineer • Systems Thinker",
      title: "Precision over noise.",
      subtitle:
        "Thoughtful engineering, scalable architecture, and clean execution. Built one decision at a time.",
    },
    about: {
      title: "Engineering Ideas Into Meaningful Systems.",
      description:
        "I enjoy turning ideas into dependable interfaces and software systems. I care about how things are structured underneath the surface as much as how they feel when someone uses them.",
      cta: "Let's build something deliberate.",
      beliefTitle: "The Engineering Mindset",
      beliefHighlight: "Every polished experience is built from deliberate decisions.",
      beliefBody:
        "I value clear architecture, useful abstractions, and code that remains understandable when a project grows.",
      servicesTitle: "I build with precision.",
      servicesDescription:
        "From robust interfaces to gameplay systems, I like solving problems methodically and shipping work that stays maintainable.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Engineered Projects',
      description: 'Systems, interfaces and interactive builds where architecture, restraint and deliberate decisions matter.',
      cta: 'Inspect the work.',
    },
    contact: {
      heading: "WHAT COMES NEXT",
      quote: [
        "Ideas become products.",
        "Products become experiences.",
        "Every meaningful build starts with a single decision.",
      ],
      footer: [
        "If you're building something that deserves attention...",
        "I'd like to hear about it.",
      ],
      button: "Let's Talk",
      signature: "Built after midnight.",
    },
  },

  emerald: {
    hero: {
      badge: "Software Engineer • Creative Builder",
      title: "Ideas deserve thoughtful execution.",
      subtitle:
        "Blending creativity with technology to craft products that are enjoyable, intuitive, and meaningful.",
    },
    about: {
      title: "Growing Ideas Into Meaningful Experiences.",
      description:
        "I'm learning by building: experimenting with new tools, improving old ideas, and gradually turning rough concepts into better experiences.",
      cta: "Let's grow an idea together.",
      beliefTitle: "Always Growing",
      beliefHighlight: "Growth is a continuous process, not a destination.",
      beliefBody:
        "I believe every project can teach something useful. Curiosity keeps me experimenting, while reflection helps me turn each lesson into a better next step.",
      servicesTitle: "I build, learn and evolve.",
      servicesDescription:
        "I like projects that give me room to explore, iterate and discover a better way to solve the problem.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Projects in Progress',
      description: 'Experiments and finished builds that show how I learn, iterate, and turn ideas into something more useful over time.',
      cta: 'Explore what is growing.',
    },
    contact: {
      heading: "BUILD SOMETHING WORTH REMEMBERING",
      quote: [
        "Every ambitious idea begins as a conversation.",
        "The right collaboration can turn it into something people genuinely enjoy using.",
      ],
      footer: ["Maybe your idea is the next one."],
      button: "Let's Build",
      signature: "Always growing.",
    },
  },

  light: {
    hero: {
      badge: "Software Engineer",
      title: "Simple. Clean. Purposeful.",
      subtitle:
        "Building software with clarity, performance, and thoughtful design at its core.",
    },
    about: {
      title: "Simple Ideas. Thoughtful Experiences.",
      description:
        "I like taking complicated problems and finding a clear path through them. My goal is software that feels easy to understand, easy to use, and easy to maintain.",
      cta: "Let's make something clear and useful.",
      beliefTitle: "Less, But Better",
      beliefHighlight: "Simplicity is the ultimate sophistication.",
      beliefBody:
        "I believe good interfaces earn attention through clarity rather than noise. Every element should have a reason to be there.",
      servicesTitle: "I build with clarity.",
      servicesDescription:
        "Clean interfaces, practical systems, and focused experiences built to be useful before they are decorative.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Clear Work. Real Results.',
      description: 'A focused collection of practical builds where usability, clarity and maintainability come before decoration.',
      cta: 'View the work.',
    },
    contact: {
      heading: "READY WHEN YOU ARE",
      quote: ["Clear thinking.", "Clean execution.", "Thoughtful software."],
      footer: [
        "If that matches what you're looking for...",
        "I'm only one message away.",
      ],
      button: "Send a Message",
      signature: "Less, but better.",
    },
  },

  blossom: {
    hero: {
      badge: "Software Engineer • Creative Builder",
      title: "Technology should feel human.",
      subtitle:
        "I enjoy combining engineering, design and curiosity to create digital experiences people genuinely enjoy using.",
    },
    about: {
      title: "Turning Ideas Into Experiences People Feel.",
      description:
        "For me, good development is not only about whether something works. It is also about whether the experience feels welcoming, intuitive and worth coming back to.",
      cta: "Let's create something people remember.",
      beliefTitle: "What Matters To Me",
      beliefHighlight: "Technology is meaningful when it connects with people.",
      beliefBody:
        "I care about the small details that make a product feel thoughtful: clear interactions, expressive visuals, and an experience that never forgets the person using it.",
      servicesTitle: "I build things people enjoy.",
      servicesDescription:
        "I combine technology with visual thinking to make interfaces, applications and games feel more alive without sacrificing usability.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Projects People Can Feel',
      description: 'Interactive builds where thoughtful visuals, friendly interactions and useful technology come together.',
      cta: 'Discover the work.',
    },
    contact: {
      heading: "MAKE SOMETHING PEOPLE FEEL",
      quote: [
        "Ideas are personal.",
        "Good collaboration turns them into experiences others can connect with.",
      ],
      footer: ["Let's make the next idea worth remembering."],
      button: "Create Together",
      signature: "Built with curiosity.",
    },
  },

  crimson: {
    hero: {
      badge: "Crimson Sword",
      title: "Crafting software with intention.",
      subtitle:
        "Every interaction is designed with precision. Every experience is built to leave a signature.",
    },
    about: {
      title: "Crafting Ideas Into Experiences With Intent.",
      description:
        "I treat development as a craft: understand the problem, shape the experience, refine the details, and keep improving until the result feels deliberate.",
      cta: "Let's craft something with intent.",
      beliefTitle: "The Signature",
      beliefHighlight: "Craftsmanship is in the details.",
      beliefBody:
        "Anyone can make software function. The discipline is in refining the details that make the final experience feel considered, coherent and unmistakably yours.",
      servicesTitle: "I build with intention.",
      servicesDescription:
        "Powerful systems, expressive interfaces and interactive experiences built through deliberate iteration rather than decoration for its own sake.",
      services: Object.values(commonServices),
      stats: commonStats,
    },
    projects: {
      title: 'Forged Projects',
      description: 'Selected work refined through iteration, discipline and attention to the details that give an experience its signature.',
      cta: 'Enter the forge.',
    },
    contact: {
      heading: "THE FINAL CHAPTER",
      quote: [
        "Every developer writes code.",
        "Very few leave a signature.",
        "Mine is built with intention.",
      ],
      footer: [
        "If this journey left an impression...",
        "Perhaps the next story should be written together.",
      ],
      button: "Enter the Next Story",
      signature: "Crafted with intent.",
    },
  },
};
