import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Scalable web platforms with clean architecture and fast performance.",
  },
  {
    name: "Mobile Apps",
    slug: "mobile-apps",
    description: "Cross-platform apps with refined UX and production-ready reliability.",
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design systems and interfaces that balance visual impact with usability.",
  },
  {
    name: "Growth Strategy",
    slug: "growth-strategy",
    description: "Data-led optimization to improve conversion, engagement, and retention.",
  },
  {
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Secure cloud infrastructure and deployment pipelines built for scale.",
  },
  {
    name: "AI & Automation",
    slug: "ai-automation",
    description: "Automation workflows and AI integrations that streamline operations.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleViewMore = (slug) => {
    navigate(`/service/${slug}`);
  };

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_34%)]" /> */}

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Our Services
          </p>
          <h2 className="mx-auto text-5xl md:text-[7rem] font-sans font-bold tracking-tighter mb-8 leading-[0.95] text-white">
            End-to-end digital capabilities built for modern teams.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            From product design to cloud delivery, we provide focused service lines that support business growth and technical excellence.
          </p>
        </div>

        <div className="mt-6 border-y border-white/70">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex items-center font-sans justify-between border-b border-white/70 px-2 py-5 last:border-b-0 sm:px-4 md:py-6"
            >
              <div>
                <h3 className="text-2xl font-bold leading-none tracking-tight text-white sm:text-3xl md:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
                  {service.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleViewMore(service.slug)}
                className="ml-4 inline-flex shrink-0 items-center gap-2 text-base font-medium text-white transition group-hover:translate-x-1 group-hover:text-white/85 sm:text-2xl"
              >
                <span className="text-sm sm:text-base">View More</span>
                <FaArrowRight className="text-lg sm:text-2xl" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}