import HeroImage from "../../../assets/images/hero.png";

export const hero = {
  badge: {
    text: "Available for Internships",
    status: "available",
  },

  name: "Lavi Kumar",

  role: "Software Engineer",

  rotatingRoles: [
    "Web Developer",
    "Frontend Engineer",
    "Game Developer",
    "AI Developer",
  ],

  headline: [
    "Building Digital",
    "Experiences",
    "That People Remember.",
  ],

  description:
    "Computer Science student passionate about building modern websites, interactive applications, immersive games and scalable software with clean architecture, performance and attention to detail.",

  buttons: {
    primary: {
      text: "View Projects",
      target: "projects",
    },

    secondary: {
      text: "Contact Me",
      target: "contact",
    },
  },

  portrait: {
    image: HeroImage,
    alt: "Lavi Kumar",
  },

  tags: [
    {
      category: "Frontend",
      value: "React",
    },

    {
      category: "Programming",
      value: "C++",
    },

    {
      category: "Game Dev",
      value: "Unity",
    },

    {
      category: "AI",
      value: "Generative AI",
    },

    {
      category: "Backend",
      value: "Node.js",
    },

    {
      category: "Database",
      value: "Supabase",
    },
  ],
};