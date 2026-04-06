import { useMemo, useState, useEffect } from "react";
import { projects } from "../data/projects";

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

const PAGE_SIZE = 3;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [pageIndex, setPageIndex] = useState(0);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Pagination count
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));

  // Reset page if filter changes
  useEffect(() => {
    setPageIndex(0);
  }, [activeFilter]);

  // Prevent overflow page index
  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(pageCount - 1);
    }
  }, [pageCount, pageIndex]);

  // Visible projects
  const visibleProjects = filteredProjects.slice(
    pageIndex * PAGE_SIZE,
    pageIndex * PAGE_SIZE + PAGE_SIZE
  );

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pageCount - 1;

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Featured Project
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
            Showcasing my best work and achievements
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
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

        {/* Projects Section */}
        <div className="relative">

          {/* Prev Button */}
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => setPageIndex((prev) => prev - 1)}
            className={`absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/75 backdrop-blur md:flex ${
              canGoPrev
                ? "border-white/35 text-white"
                : "cursor-not-allowed border-white/10 text-white/35"
            }`}
          >
            ←
          </button>

          {/* Next Button */}
          <button
            type="button"
            disabled={!canGoNext}
            onClick={() => setPageIndex((prev) => prev + 1)}
            className={`absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/75 backdrop-blur md:flex ${
              canGoNext
                ? "border-white/35 text-white"
                : "cursor-not-allowed border-white/10 text-white/35"
            }`}
          >
            →
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={`${project.title}-${project.category}`}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-black/70 backdrop-blur"
              >
                <div className="relative h-64 bg-gradient-to-br from-white/18 via-white/8 to-transparent">

                  <img
                    src={project.previewA}
                    alt={project.title}
                    className="absolute left-5 top-6 h-24 w-24 rounded-xl border border-white/25 bg-black/45 object-contain p-2"
                  />

                  <img
                    src={project.previewB}
                    alt={project.title}
                    className="absolute right-5 top-8 h-20 w-28 rounded-xl border border-white/25 bg-black/45 object-contain p-2"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/35 bg-black/50 text-white hover:bg-black/70"
                    >
                      ↗
                    </button>

                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/35 bg-black/50 text-white hover:bg-black/70"
                    >
                      ⋯
                    </button>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-black/80 p-5">
                  <h3 className="text-3xl font-medium text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {project.description}
                  </p>

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

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPageIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === pageIndex
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}