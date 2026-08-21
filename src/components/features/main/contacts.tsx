import { useState } from "react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/design/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <main>
      <Section className="py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Get in touch
          </p>

          <h1
            className={cn(
              "mt-3 text-3xl font-bold italic",
              "sm:text-4xl lg:text-5xl"
            )}
          >
            CONTACT ME
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Have a project, question, or opportunity? Feel free to
            reach out.
          </p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="grid gap-8 lg:grid-cols-5">

          <div
            className={cn(
              "rounded-3xl bg-gray-900 p-7 text-white",
              "sm:p-10 lg:col-span-2"
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Let's talk
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Let's build something together.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Whether you have a project idea, need help with a
              website, or simply want to connect, send me a message.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium">
                    felvinbags@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium">
                    Cebu, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl">💼</span>
                <div>
                  <p className="text-xs text-gray-400">Availability</p>
                  <p className="text-sm font-medium">
                    Open for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "rounded-3xl border border-gray-200",
              "bg-white p-7 shadow-sm",
              "sm:p-10 lg:col-span-3"
            )}
          >
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold">
                  Send me a message
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form below and I'll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={cn(
                        "w-full rounded-xl border border-gray-200",
                        "bg-gray-50 px-4 py-3 text-sm",
                        "outline-none transition-all",
                        "focus:border-gray-400 focus:bg-white",
                        "focus:ring-2 focus:ring-gray-200"
                      )}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={cn(
                        "w-full rounded-xl border border-gray-200",
                        "bg-gray-50 px-4 py-3 text-sm",
                        "outline-none transition-all",
                        "focus:border-gray-400 focus:bg-white",
                        "focus:ring-2 focus:ring-gray-200"
                      )}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What would you like to discuss?"
                      className={cn(
                        "w-full rounded-xl border border-gray-200",
                        "bg-gray-50 px-4 py-3 text-sm",
                        "outline-none transition-all",
                        "focus:border-gray-400 focus:bg-white",
                        "focus:ring-2 focus:ring-gray-200"
                      )}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."
                      className={cn(
                        "w-full resize-none rounded-xl",
                        "border border-gray-200 bg-gray-50",
                        "px-4 py-3 text-sm outline-none",
                        "transition-all",
                        "focus:border-gray-400 focus:bg-white",
                        "focus:ring-2 focus:ring-gray-200"
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className={cn(
                      "w-full py-3 sm:w-auto sm:px-8",
                      loading && "cursor-not-allowed opacity-70"
                    )}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </Button>
                </form>
              </>
            ) : (

              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center",
                    "rounded-full bg-green-100 text-3xl"
                  )}
                >
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Message Sent Successfully!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                  Thank you for reaching out. I've received your
                  message and will get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className={cn(
                    "mt-6 rounded-xl border border-gray-200",
                    "px-5 py-2.5 text-sm font-semibold",
                    "transition-all duration-300",
                    "hover:bg-gray-900 hover:text-white"
                  )}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}