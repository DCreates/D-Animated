import { useMemo, useState } from "react";

// Synced with Services categories
const FILTERS = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Growth Strategy",
  "Cloud Solutions",
  "AI & Automation",
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Modern and responsive personal portfolio website showcasing projects, skills, and testimonials.",
    tags: ["HTML", "CSS", "JavaScript"],
    metric: "100% responsive design",
    previewA: "/logos/logo1.png",
    previewB: "/logos/logo2.png",
  },
  {
    title: "Restaurant Ordering System",
    category: "Web Development",
    description:
      "Online food ordering system with menu management, order tracking, and admin dashboard.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    metric: "30% faster order processing",
    previewA: "/logos/logo3.png",
    previewB: "/logos/logo4.webp",
  },
  {
    title: "Mobile App Platform",
    category: "Mobile Apps",
    description:
      "Cross-platform mobile application with refined UX and production-ready reliability.",
    tags: ["React Native", "Firebase"],
    metric: "50K+ downloads",
    previewA: "/logos/logo2.png",
    previewB: "/logos/logo4.webp",
  },
  {
    title: "Design System Implementation",
    category: "UI/UX Design",
    description:
      "Comprehensive design system and component library balancing visual impact with usability.",
    tags: ["Figma", "React Components"],
    metric: "40+ components created",
    previewA: "/logos/logo1.png",
    previewB: "/logos/logo3.png",
  },
  {
    title: "Growth Analytics Dashboard",
    category: "Growth Strategy",
    description:
      "Data-led optimization dashboard improving conversion, engagement, and user retention metrics.",
    tags: ["Analytics", "Python", "D3.js"],
    metric: "35% engagement increase",
    previewA: "/logos/logo3.png",
    previewB: "/logos/logo1.png",
  },
  {
    title: "Cloud Infrastructure Pipeline",
    category: "Cloud Solutions",
    description:
      "Secure cloud infrastructure and automated deployment pipelines built for enterprise scale.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    metric: "99.99% uptime SLA",
    previewA: "/logos/logo4.webp",
    previewB: "/logos/logo2.png",
  },
];

const PAGE_SIZE = 3;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [pageIndex, setPageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const visibleProjects = filteredProjects.slice(
    pageIndex * PAGE_SIZE,
    pageIndex * PAGE_SIZE + PAGE_SIZE,
  );

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pageCount - 1;

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Featured Project
          </p>
          
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
            Showcasing my best work and achievements
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setPageIndex(0);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-white/65 bg-white/20 text-white shadow-[0_0_14px_rgba(255,255,255,0.22)]"
                    : "border-white/20 bg-white/5 text-slate-300 hover:border-white/45 hover:text-white"
                }`}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                {filter}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <button
            onClick={() => canGoPrev && setPageIndex((prev) => prev - 1)}
            className={`absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/75 backdrop-blur md:flex ${
              canGoPrev
                ? "border-white/35 text-white"
                : "cursor-not-allowed border-white/10 text-white/35"
            }`}
            aria-label="Previous projects"
          >
            ←
          </button>

          <button
            onClick={() => canGoNext && setPageIndex((prev) => prev + 1)}
            className={`absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/75 backdrop-blur md:flex ${
              canGoNext
                ? "border-white/35 text-white"
                : "cursor-not-allowed border-white/10 text-white/35"
            }`}
            aria-label="Next projects"
          >
            →
          </button>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={`${project.title}-${project.category}`}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-black/70 backdrop-blur"
              >
                <div className="relative h-64 bg-linear-to-br from-white/18 via-white/8 to-transparent">
                  <img
                    src={project.previewA}
                    alt=""
                    className="absolute left-5 top-6 h-24 w-24 rounded-xl border border-white/25 bg-black/45 object-contain p-2"
                  />
                  <img
                    src={project.previewB}
                    alt=""
                    className="absolute right-5 top-8 h-20 w-28 rounded-xl border border-white/25 bg-black/45 object-contain p-2"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/35 bg-black/50 text-white transition hover:bg-black/70">
                      ↗
                    </button>
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/35 bg-black/50 text-white transition hover:bg-black/70">
                      ⋯
                    </button>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-black/80 p-5">
                  <h3 className="text-3xl font-medium text-white">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-lg border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4 text-base text-white/90">
                    ↗ {project.metric}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={`project-dot-${index}`}
              onClick={() => setPageIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === pageIndex ? "w-8 bg-white" : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Go to projects page ${index + 1}`}
            />
          ))}
        </div>

        {/* <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/10"
          >
            View Related Services
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/10"
          >
            Learn About Us
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}

