import { cn } from "@/lib/cn";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/design/button";
import { NavLink } from "react-router";
import Gloss from '@/assets/Glossier.jpeg';
import Portfolio from '@/assets/Portfolio1.png';
import Rest from '@/assets/rest.jpg';
import AI from '@/assets/AI.jpg';
import task from '@/assets/task.jpg';
import mobile from '@/assets/mobile.jpg';

const projects = [
  {
    title: "Portfolio Website",
    type: "Personal Project",
    description:
      "A responsive portfolio website designed to showcase my skills, services, projects, and experience as a future Software Engineer.",
    image: Portfolio,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "/",
  },
  {
    title: "E-Commerce Platform",
    type: "Web Application",
    description:
      "A modern e-commerce platform with product management, shopping cart functionality, authentication, and a responsive interface.",
    image: Gloss,
    technologies: ["React", "Laravel", "MySQL"],
    link: "https://www.glossier.com/en-ph/products/the-glossier-icons?variant=48440263049461",
  },
  {
    title: "Task Management App",
    type: "Web Application",
    description:
      "A productivity application for organizing tasks, tracking progress, and managing daily activities through a simple interface.",
    image: task,
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://play.google.com/store/apps/details?id=com.anydo",
  },
  {
    title: "Mobile Application",
    type: "Mobile Project",
    description:
      "A mobile application focused on creating a simple and intuitive user experience across different mobile devices.",
    image: mobile,
    technologies: ["React Native", "TypeScript"],
    link: "https://play.google.com/store/apps/details?id=com.facebook.katana",
  },
  {
    title: "REST API",
    type: "Backend Project",
    description:
      "A RESTful API providing authentication, database operations, and structured endpoints for modern applications.",
    image: Rest,
    technologies: ["Laravel", "PHP", "MySQL"],
    link: "https://laravel.com/",
  },
  {
    title: "AI Assistant",
    type: "AI Project",
    description:
      "An experimental AI-powered application exploring automation, intelligent responses, and integration with modern APIs.",
    image: AI,
    technologies: ["React", "Node.js", "AI API"],
    link: "https://gemini.google.com/app",
  },
];

export default function Works() {
  return (
    <main>
      <Section className="py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            My portfolio
          </p>

          <h1
            className={cn(
              "mt-3 text-3xl font-bold italic",
              "sm:text-4xl lg:text-5xl"
            )}
          >
            MY WORKS
          </h1>

          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl",
              "text-sm leading-7 text-gray-600",
              "sm:text-base"
            )}
          >
            A collection of projects I've built while learning,
            experimenting, and developing my skills in software
            engineering.
          </p>
        </div>
      </Section>

      <Section className="pb-20">
        <div
          className={cn(
            "grid gap-8",
            "sm:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={cn(
                "group overflow-hidden rounded-2xl",
                "border border-gray-200 bg-white",
                "shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-xl"
              )}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "h-full w-full object-cover",
                    "transition-transform duration-500",
                    "group-hover:scale-105"
                  )}
                />

                <span
                  className={cn(
                    "absolute left-4 top-4",
                    "rounded-full bg-white/90 px-3 py-1",
                    "text-xs font-semibold text-gray-700",
                    "backdrop-blur-md"
                  )}
                >
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold">
                  {project.title}
                </h2>

                <p
                  className={cn(
                    "mt-3 text-sm leading-6",
                    "text-gray-600"
                  )}
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={cn(
                        "rounded-full bg-gray-100",
                        "px-3 py-1 text-xs font-medium",
                        "text-gray-600"
                      )}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className={cn(
                    "mt-6 inline-flex items-center",
                    "text-sm font-bold text-gray-900",
                    "transition-all duration-300",
                    "hover:gap-2"
                  )}
                >
                  View Project
                  <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div
          className={cn(
            "rounded-3xl border border-gray-200",
            "bg-gray-50 px-6 py-12 text-center",
            "sm:px-10 sm:py-16"
          )}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Technologies
          </p>

          <h2
            className={cn(
              "mt-3 text-2xl font-bold",
              "sm:text-3xl"
            )}
          >
            Tools I Work With
          </h2>

          <div
            className={cn(
              "mx-auto mt-8 flex max-w-3xl",
              "flex-wrap justify-center gap-3"
            )}
          >
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Laravel",
              "PHP",
              "PostgreSQL",
              "MySQL",
              "Git",
              "GitHub",
            ].map((technology) => (
              <span
                key={technology}
                className={cn(
                  "rounded-full border border-gray-200",
                  "bg-white px-4 py-2",
                  "text-sm font-medium text-gray-700",
                  "shadow-sm",
                  "transition-all duration-300",
                  "hover:-translate-y-1",
                  "hover:bg-gray-900 hover:text-white"
                )}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div
          className={cn(
            "rounded-3xl bg-gray-900",
            "px-6 py-12 text-center text-white",
            "sm:px-10 sm:py-16"
          )}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Have an idea?
          </p>

          <h2
            className={cn(
              "mt-3 text-2xl font-bold",
              "sm:text-3xl lg:text-4xl"
            )}
          >
            Let's turn your idea into reality.
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-xl",
              "text-sm leading-7 text-gray-300",
              "sm:text-base"
            )}
          >
            I'm always interested in building new projects,
            experimenting with technologies, and solving interesting
            problems.
          </p>

          <NavLink to="/Contact">
            <Button
              variant="primary"
              className="mt-8 px-7 py-3"
            >
              Start a Project →
            </Button>
          </NavLink>
        </div>
      </Section>
    </main>
  );
}