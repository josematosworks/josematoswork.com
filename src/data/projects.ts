// src/data/projects.ts

export interface CallToAction {
  target: string;
  text: string;
  href: string;
  icon?: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  keyFeatures: string[];
  role: string[];
  images: Image[];
  callToActions: CallToAction[];
}

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Website (this site)",
    description:
      "Developed a high-performance personal website to showcase my portfolio and technical skills, leveraging cutting-edge web technologies. This project demonstrates my ability to work with modern frameworks and tools, emphasizing code quality, performance optimization, and responsive design.",
    keyFeatures: [
      "Achieved exceptional performance scores in PageSpeed Insights, ensuring a fast and efficient user experience.",
      "Implemented a responsive design with dark mode support using Tailwind CSS for flexible and maintainable styling.",
      "Utilized Astro's static site generation capabilities to create lightning-fast page loads and improved SEO.",
      "Integrated image optimization techniques using Astro Assets and Unpic for efficient image delivery across various devices.",
      "Implemented analytics tracking to gain insights into user behavior and site performance.",
    ],
    role: [
      "Architected and implemented the entire website using Astro, React, and TypeScript.",
      "Leveraged Astro's component-based architecture to create reusable UI elements.",
      "Implemented SEO best practices, including Open Graph tags for improved social media sharing.",
      "Set up a robust development environment with ESLint and Prettier for consistent code quality.",
      "Utilized Git for version control and implemented a streamlined deployment process.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Personal Website Project",
      },
    ],
    callToActions: [
      {
        target: "_blank",
        text: "GitHub",
        href: "https://github.com/josematosworks/josematoswork.com",
        icon: "tabler:brand-github",
      },
    ],
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    description:
      "Developed a Netflix clone application using Angular, showcasing proficiency in modern web development techniques and the ability to replicate complex user interfaces. This project demonstrates skills in component-based architecture, state management, and integration with external APIs.",
    keyFeatures: [
      "Implemented a responsive design that closely mimics Netflix's user interface",
      "Integrated with The Movie Database (TMDB) API to fetch and display movie and TV show data",
      "Implemented mocked user authentication and profile management",
    ],
    role: [
      "Architected and implemented the entire application using Angular and related technologies",
      "Designed and implemented the responsive UI using CSS and potentially a UI framework",
      "Integrated with external APIs and managed state using appropriate state management solutions",
      "Optimized performance and ensured cross-browser compatibility",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Netflix Clone Project",
      },
    ],
    callToActions: [
      {
        target: "_blank",
        text: "GitHub",
        href: "https://github.com/josematosworks/NetflixClone",
        icon: "tabler:brand-github",
      },
      {
        target: "_blank",
        text: "Live Demo",
        href: "https://netflix-clone.josematos.work",
        icon: "tabler:world",
      },
    ],
  },
];