import { cn } from "@/lib/cn";
import Work from "@/assets/felvz.jpg";
import { Button } from "@/components/design/button";
import { NavLink } from "react-router";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
  "PostgreSQL",
];

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
];

export default function Abouts() {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-7xl px-5",
        "sm:px-8 lg:px-12"
      )}
    >

      <section className="py-16 text-center sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Get to know me
        </p>

        <h1
          className={cn(
            "text-3xl font-bold italic",
            "sm:text-4xl lg:text-5xl"
          )}
        >
          ABOUT ME
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          A little more about who I am, what I do, and what I'm working
          towards as a future Software Engineer.
        </p>
      </section>

      <section
        className={cn(
          "flex flex-col items-center gap-12",
          "lg:flex-row lg:items-start lg:gap-20"
        )}
      >
        <div className="w-full lg:w-5/12">
          <div className="relative mx-auto w-fit">
            <div
              className={cn(
                "absolute -right-3 -top-3 h-full w-full",
                "rounded-2xl border-2 border-gray-200"
              )}
            />

            <img
              src={Work}
              alt="Felvin Baguio"
              className={cn(
                "relative w-64 rounded-2xl object-cover shadow-xl",
                "sm:w-80 lg:w-96",
                "transition-transform duration-300",
                "hover:scale-[1.02]"
              )}
            />
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Who I am
          </p>

          <h2
            className={cn(
              "text-2xl font-bold leading-tight",
              "sm:text-3xl lg:text-4xl"
            )}
          >
            I'm Felvin, a College Student & Future Software Engineer.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              I'm currently studying Information Technology and building
              my skills in software development, web applications, and
              modern technologies.
            </p>

            <p>
              I enjoy turning ideas into functional digital experiences.
              My goal is to create software that is simple to use,
              reliable, scalable, and useful.
            </p>

            <p>
              I'm continuously learning new technologies and improving
              my development skills through personal projects,
              coursework, and real-world practice.
            </p>
          </div>

          <div className="mt-8">
            <NavLink to="/Contact">
              <Button
                variant="primary"
                className="px-6 py-3 italic"
              >
                Let's Work Together
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div
          className={cn(
            "grid gap-5",
            "sm:grid-cols-3"
          )}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-2xl border border-gray-200",
                "bg-gray-50 p-6 text-center",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              )}
            >
              <p className="text-3xl font-bold sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            My toolkit
          </p>

          <h2
            className={cn(
              "mt-2 text-2xl font-bold italic",
              "sm:text-3xl"
            )}
          >
            TECHNOLOGIES I USE
          </h2>
        </div>

        <div
          className={cn(
            "flex flex-wrap justify-center gap-3"
          )}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                "rounded-full border border-gray-200",
                "bg-white px-5 py-2.5",
                "text-sm font-semibold text-gray-700",
                "shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:bg-gray-900",
                "hover:text-white hover:shadow-md"
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}