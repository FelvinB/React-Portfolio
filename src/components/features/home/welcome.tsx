import { Button } from "@/components/design/button";
import Work from "@/assets/felvz.jpg";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";

const services = [
  {
    icon: "🌍",
    title: "WEBSITE AND WEB APPS",
    text: "Building responsive, fast, and optimized web platforms using modern architectures for maximum speed and scale.",
  },
  {
    icon: "🎮",
    title: "CUSTOM SOFTWARE",
    text: "Creating software solutions designed around specific business needs, workflows, and performance requirements.",
  },
  {
    icon: "📱",
    title: "MOBILE DEVELOPMENT",
    text: "Developing reliable mobile applications with modern technologies and user-focused designs.",
  },
  {
    icon: "🤖",
    title: "GENERATIVE AI",
    text: "Building AI-powered solutions that improve productivity and create smarter digital experiences.",
  },
];

const faqs = [
  {
    question: "What is your tech stack?",
    answer:
      "I use Next.js, Node.js, React Native, PostgreSQL, and modern cloud technologies.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. I provide 15 days of free support for bug fixes and minor improvements after launch.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Projects are priced by scope and milestones with clear timelines and no hidden costs.",
  },
  {
    question: "Can you work with my development team?",
    answer:
      "Yes. I collaborate with in-house teams using Git workflows, sprint planning, and clear documentation.",
  },
];

export default function Welcome() {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-7xl px-5",
        "sm:px-8",
        "lg:px-12"
      )}
    >
      <section
        id="top"
        className={cn(
          "flex min-h-[calc(100vh-80px)] flex-col items-center",
          "justify-center gap-10 py-16",
          "lg:flex-row lg:gap-16"
        )}
      >
        <div
          className={cn(
            "flex w-full justify-center",
            "lg:w-1/2"
          )}
        >
          <img
            src={Work}
            alt="Felvin Baguio"
            className={cn(
              "w-64 rounded-2xl object-cover shadow-xl",
              "transition-transform duration-300",
              "hover:scale-105",
              "sm:w-80",
              "lg:w-96"
            )}
          />
        </div>
        
        <div
          className={cn(
            "w-full text-center",
            "lg:w-1/2 lg:text-left"
          )}
        >
          <h1
            className={cn(
              "text-3xl font-bold leading-tight",
              "sm:text-4xl",
              "lg:text-5xl"
            )}
          >
            HI, I'M FELVIN BAGUIO
          </h1>

          <h2
            className={cn(
              "mt-3 text-3xl font-bold leading-tight",
              "sm:text-4xl",
              "lg:text-5xl"
            )}
          >
            COLLEGE STUDENT.
          </h2>

          <p
            className={cn(
              "mx-auto mt-6 max-w-xl",
              "text-base leading-7 text-gray-600",
              "sm:text-lg",
              "lg:mx-0"
            )}
          >
            I'm a future Software Engineer, engineering scalable software
            from web and mobile applications to backend infrastructure and
            AI-powered solutions.
          </p>

          <div
            className={cn(
              "mt-8 flex flex-col items-center gap-4",
              "sm:flex-row sm:justify-center",
              "lg:justify-start"
            )}
          >
            <NavLink to="/Contact">
              <Button
                variant="primary"
                className={cn(
                  "w-full px-6 py-3 italic",
                  "sm:w-auto"
                )}
              >
                Let's Talk
              </Button>
            </NavLink>

            <NavLink to="/Works">
              <Button
                variant="secondary"
                className={cn(
                  "w-full px-6 py-3 italic",
                  "sm:w-auto"
                )}
              >
                View My Works
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2
          className={cn(
            "mb-12 text-center text-2xl font-bold italic",
            "sm:text-3xl"
          )}
        >
          WHAT I CAN DO?
        </h2>

        <div
          className={cn(
            "grid gap-8",
            "sm:grid-cols-2",
            "lg:grid-cols-4"
          )}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "rounded-2xl border border-gray-200",
                "bg-white p-6 text-center shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-lg"
              )}
            >
              <div className="mb-4 text-4xl">
                {service.icon}
              </div>

              <h3 className="mb-4 text-lg font-bold">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2
          className={cn(
            "mb-12 text-center text-2xl font-bold italic",
            "sm:text-3xl"
          )}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div
          className={cn(
            "grid gap-6",
            "md:grid-cols-2"
          )}
        >
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className={cn(
                "rounded-xl border border-gray-200",
                "bg-gray-50 p-6",
                "transition-all duration-300",
                "hover:bg-white hover:shadow-md"
              )}
            >
              <h3 className="mb-3 font-bold">
                {faq.question}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}