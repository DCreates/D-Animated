import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "FinFlow Dashboard",
    category: "SaaS Platform",
    summary:
      "A finance operations dashboard with role-based workflows, real-time metrics, and alert routing.",
    stack: ["React", "Node", "PostgreSQL"],
  },
  {
    name: "Nexa Commerce",
    category: "E-commerce",
    summary:
      "A conversion-focused storefront redesign with personalized recommendation modules and analytics hooks.",
    stack: ["Next.js", "Stripe", "CMS"],
  },
  {
    name: "OpsPilot AI",
    category: "Automation",
    summary:
      "An internal AI assistant to automate ticket triage, summarize updates, and reduce repetitive workload.",
    stack: ["Python", "LLM", "Azure"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Selected Projects
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Modern solutions built for measurable business impact.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            A snapshot of recent product, platform, and automation work delivered across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-cyan-100 uppercase">
                {project.category}
              </div>

              <h3 className="relative text-xl font-semibold text-white">{project.name}</h3>
              <p className="relative mt-3 text-sm leading-6 text-slate-300 md:text-base">
                {project.summary}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
