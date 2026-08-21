import { cn } from "@/lib/cn";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/design/button";
import { NavLink } from "react-router";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building responsive and modern websites that are fast, accessible, and optimized for different screen sizes.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Web Applications",
    description:
      "Developing functional web applications with clean interfaces, reliable APIs, and scalable architectures.",
    technologies: ["React", "Node.js", "Laravel"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description:
      "Creating mobile applications designed for smooth performance and intuitive user experiences.",
    technologies: ["React Native", "TypeScript"],
  },
  {
    icon: "🗄️",
    title: "Backend Development",
    description:
      "Building secure backend systems, REST APIs, databases, and server-side applications.",
    technologies: ["Node.js", "Laravel", "PostgreSQL"],
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Exploring AI-powered applications that automate tasks and create smarter digital experiences.",
    technologies: ["AI", "APIs", "Automation"],
  },
  {
    icon: "🛠️",
    title: "Custom Software",
    description:
      "Creating software solutions based on specific requirements, workflows, and project needs.",
    technologies: ["Full Stack", "APIs", "Database"],
  },
];

export default function Service() {
  return (
    <main>
      <Section className="py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            What I offer
          </p>

          <h1
            className={cn(
              "mt-3 text-3xl font-bold italic",
              "sm:text-4xl lg:text-5xl"
            )}
          >
            MY SERVICES
          </h1>

          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl",
              "text-sm leading-7 text-gray-600 sm:text-base"
            )}
          >
            I build modern digital solutions with a focus on
            performance, usability, scalability, and clean code.
          </p>
        </div>
      </Section>

      <Section className="pb-20">
        <div
          className={cn(
            "grid gap-6",
            "sm:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "group rounded-2xl border border-gray-200",
                "bg-white p-7 shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-xl"
              )}
            >
              <div
                className={cn(
                  "mb-6 flex h-14 w-14 items-center justify-center",
                  "rounded-xl bg-gray-100 text-2xl",
                  "transition-all duration-300",
                  "group-hover:bg-gray-900"
                )}
              >
                {service.icon}
              </div>

              <h2 className="text-xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
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
            </article>
          ))}
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
            Have a project in mind?
          </p>

          <h2
            className={cn(
              "mt-3 text-2xl font-bold",
              "sm:text-3xl lg:text-4xl"
            )}
          >
            Let's build something together.
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-xl",
              "text-sm leading-7 text-gray-300 sm:text-base"
            )}
          >
            Whether it's a website, web application, mobile app,
            or custom software, I'd be happy to discuss your idea.
          </p>

          <NavLink to="/Contact">
            <Button
              variant="primary"
              className="mt-8 px-7 py-3"
            >
              Let's Talk →
            </Button>
          </NavLink>
        </div>
      </Section>
    </main>
  );
}