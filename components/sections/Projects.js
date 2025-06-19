import ProjectCard from "@/components/ui/ProjectCard";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    id: 1,
    title: "onfollow (Full Stack)",
    description: "A social platform built with React, Vite, and Sanity CMS",
    tags: ["React", "Sanity", "Tailwind"],
    gradient: "from-blue-400 to-purple-500",
    demoUrl: "#",
    codeUrl: "#",
    features: ["User authentication", "Real-time updates", "Responsive design"],
  },
  {
    id: 2,
    title: "Sales Dashboard",
    description: "Interactive dashboard with real-time analytics",
    tags: ["Next.js", "Tailwind", "Charts"],
    gradient: "from-amber-400 to-pink-500",
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Data visualization",
      "Customizable widgets",
      "Export functionality",
    ],
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Complete admin panel for e-commerce management",
    tags: ["React", "MUI", "Nivo"],
    gradient: "from-emerald-400 to-teal-500",
    demoUrl: "#",
    codeUrl: "#",
    features: ["User management", "Order tracking", "Inventory control"],
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div className="max-w-6xl mx-auto">
      <Fade direction="down" triggerOnce>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Discover My Projects
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            That highlight my skills and vision
          </p>
        </div>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              animationDelay={index * 100}
            />
          ))}
        </Fade>
      </div>

      {/* GitHub call-to-action */}
      <Fade direction="up" triggerOnce delay={300}>
        <div className="mt-16 text-center">
          <a
            href="https://github.com/khaled-17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            View All Projects on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </Fade>
    </div>
  </section>
);

export default Projects;
