export default function Contact() {
  const contactCards = [
    {
      title: "Email",
      value: "info@dcreate.com",
      href: "mailto:info@dcreate.com",
      note: "Best for project briefs and documents",
    },
    {
      title: "Phone",
      value: "+123 456 7890",
      href: "tel:+1234567890",
      note: "Mon - Fri, 9:00 AM to 6:00 PM",
    },
    {
      title: "Location",
      value: "123 Street, City",
      href: "#",
      note: "Remote-first with global collaboration",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.35)]">
            Contact Us
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s build your next digital product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Share your vision, timeline, and goals. We will map the right strategy across design, development, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="space-y-6">
            <article className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Why Teams Choose Us
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Clear process. Faster delivery.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                From discovery to deployment, we keep communication transparent and execution focused so your team moves with confidence.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/15 bg-black/35 p-4">
                  <p className="text-xl font-semibold text-white">24h</p>
                  <p className="mt-1 text-xs text-slate-400">Response time</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-black/35 p-4">
                  <p className="text-xl font-semibold text-white">95%+</p>
                  <p className="mt-1 text-xs text-slate-400">On-time delivery</p>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{item.title}</p>
                  <a href={item.href} className="mt-2 block text-lg text-white transition hover:text-white/80">
                    {item.value}
                  </a>
                  <p className="mt-2 text-xs text-slate-400">{item.note}</p>
                </article>
              ))}
            </div>
          </div>

          <form className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Project Inquiry</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Tell us about your project</h3>
              </div>
              <p className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-slate-300">
                Secure form
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/45"
                />
              </label>

              <label className="text-sm text-slate-300">
                Company
                <input
                  type="text"
                  placeholder="Company name"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/45"
                />
              </label>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/45"
                />
              </label>

              <label className="text-sm text-slate-300">
                Budget
                <select className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/45">
                  <option value="">Select range</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-300">
              Service Needed
              <select className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/45">
                <option value="">Select service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="growth-strategy">Growth Strategy</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="ai-automation">AI & Automation</option>
              </select>
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Project Brief
              <textarea
                rows={5}
                placeholder="Tell us what you want to build..."
                className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/45"
              />
            </label>

            <label className="mt-4 flex items-start gap-3 text-sm text-slate-300">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40" />
              <span>I agree to be contacted about this inquiry and project follow-up.</span>
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/15"
              >
                Send Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/10"
              >
                View Our Projects
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
