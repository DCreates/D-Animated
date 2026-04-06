import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    service: "",
    message: "",
    agree: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    const { name, email, budget, service, message, agree } = form;

    // ✅ Validation
    if (!name || !email || !budget || !service || !message || !agree) {
      setError("Please fill all fields and accept terms.");
      return;
    }

    setError("");

    // ✅ WhatsApp message
    const text = `Hello,%0A
Name: ${name}%0A
Email: ${email}%0A
Company: ${form.company}%0A
Budget: ${budget}%0A
Service: ${service}%0A
Message: ${message}`;

    const url = `https://wa.me/94725535524?text=${text}`;

    window.open(url, "_blank");
  };

  const isValid =
    form.name &&
    form.email &&
    form.budget &&
    form.service &&
    form.message &&
    form.agree;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 sm:px-10 lg:px-20"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <div className="mx-auto mb-20 max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur-xl">
            PREMIUM CONTACT EXPERIENCE
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Design. Strategy. Engineering.
            <br />
            Delivered beautifully.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Let’s transform your vision into a premium digital experience.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.1fr]">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Premium Collaboration
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-white">
                Crafted for brands that value precision.
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                We combine premium design, scalable development, and clean
                engineering into one luxury experience.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-semibold text-white">24h</p>
                  <p className="mt-1 text-sm text-slate-400">Fast response</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-semibold text-white">98%</p>
                  <p className="mt-1 text-sm text-slate-400">Client success</p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactCard
                icon={<FaEnvelope />}
                title="Email"
                value="info@yourcompany.com"
              />

              <ContactCard
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+94 72 553 5524"
              />

              <ContactCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Sri Lanka"
              />
            </div>
          </div>

          {/* Premium Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-3xl md:p-10"
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Start A Project
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                Let’s build your next product.
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Name"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                label="Company"
                placeholder="Company name"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                label="Email"
                placeholder="you@company.com"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
              />
              <BudgetSelect
                name="budget"
                value={form.budget}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <ServiceSelect
                name="service"
                value={form.service}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <label className="mt-6 flex gap-3 text-sm text-slate-400">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
              />
              I agree to
              project communication and updates.
            </label>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!isValid}
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition disabled:opacity-40"
              >
                Send Inquiry
              </button>

              <button
                type="button"
                className="rounded-full border border-white/10 px-7 py-3 text-sm text-white transition hover:bg-white/5"
              >
                Explore Projects
              </button>
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* Components */

function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <div className="rounded-xl bg-white/10 p-3 text-white text-lg">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
          {title}
        </p>
        <p className="mt-1 text-white">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder, name, value, onChange, type = "text" }) {
  return (
    <label className="block text-sm text-slate-300">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/25"
      />
    </label>
  );
}

function BudgetSelect({ name, value, onChange }) {
  return (
    <label className="block text-sm text-slate-300">
      <span>Budget</span>
      <div className="relative mt-2">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 pr-12 text-white outline-none transition focus:border-white/25"
        >
          <option value="">Select range</option>
          <option value="$10k - $25k">$10k - $25k</option>
          <option value="$25k - $50k">$25k - $50k</option>
          <option value="$50k+">$50k+</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-white/50">
          ⌄
        </span>
      </div>
    </label>
  );
}

function ServiceSelect({ name, value, onChange }) {
  return (
    <label className="block text-sm text-slate-300">
      <span>Service Needed</span>
      <div className="relative mt-2">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 pr-12 text-white outline-none transition focus:border-white/25"
        >
          <option value="">Select service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Apps">Mobile Apps</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Cloud Solutions">Cloud Solutions</option>
          <option value="AI Automation">AI Automation</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-white/50">
          ⌄
        </span>
      </div>
    </label>
  );
}

function Textarea({ name, value, onChange }) {
  return (
    <label className="block text-sm text-slate-300">
      <span>Project Brief</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder="Tell us what you want to build..."
        className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/25"
      />
    </label>
  );
}
