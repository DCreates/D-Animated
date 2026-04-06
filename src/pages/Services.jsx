import {
  FaChartLine,
  FaCloud,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    name: "Web Development",
    description: "Scalable web platforms with clean architecture and fast performance.",
    icon: FaLaptopCode,
  },
  {
    name: "Mobile Apps",
    description: "Cross-platform apps with refined UX and production-ready reliability.",
    icon: FaMobileAlt,
  },
  {
    name: "UI/UX Design",
    description: "Design systems and interfaces that balance visual impact with usability.",
    icon: FaPaintBrush,
  },
  {
    name: "Growth Strategy",
    description: "Data-led optimization to improve conversion, engagement, and retention.",
    icon: FaChartLine,
  },
  {
    name: "Cloud Solutions",
    description: "Secure cloud infrastructure and deployment pipelines built for scale.",
    icon: FaCloud,
  },
  {
    name: "AI & Automation",
    description: "Automation workflows and AI integrations that streamline operations.",
    icon: FaRobot,
  },
];

export default function Services() {
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
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            End-to-end digital capabilities built for modern teams.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            From product design to cloud delivery, we provide focused service lines that support business growth and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
            <div
              key={service.name}
              className="group relative rounded-2xl border border-white/20 px-6 pb-6 pt-16 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-2xl  opacity-0 transition group-hover:opacity-100" />

              <div className="absolute left-10 top-0 z-10 inline-flex h-10 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-lg text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <Icon />
              </div>

              <h3 className="relative text-xl font-semibold text-white">{service.name}</h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-300 md:text-base">
                {service.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}