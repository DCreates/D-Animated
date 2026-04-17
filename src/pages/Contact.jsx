import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", budget: "", service: "", message: "", agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    // Formatted message for WhatsApp
    const messageText = `*New Project Inquiry*%0A` +
      `--------------------------%0A` +
      `*Name:* ${form.name}%0A` +
      `*Company:* ${form.company || "N/A"}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Service:* ${form.service}%0A` +
      `*Budget:* ${form.budget}%0A` +
      `*Message:* ${form.message}`;

    const whatsappUrl = `https://wa.me/94725535524?text=${messageText}`;

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 1000);
  };

  const isValid = form.name && form.email && form.budget && form.service && form.message && form.agree;

  return (
    <section id="contact" className="relative bg-[#000] px-6 py-28 sm:px-10 lg:px-20 overflow-hidden font-sans selection:bg-white/20">
      
      {/* 🌌 FROZEN AURORA BACKGROUND */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] rounded-full blur-[140px] bg-blue-500/10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[140px] bg-purple-500/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Project Inquiry</span>
          </div>
          
          <h2 className="text-[50px] md:text-8xl font-semibold tracking-tighter text-white leading-[0.9] max-w-4xl">
            Precision. Strategy.<br /> 
            <span className="bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-800 bg-clip-text text-transparent">
              Built for Impact<span className="text-blue-500">.</span>
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Side: Bento Style Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 rounded-[40px] border border-white/15 bg-gradient-to-br from-white/[0.03] to-transparent p-10 backdrop-blur-3xl transition-all duration-500 hover:border-white/[0.12]">
              <h3 className="text-3xl font-medium tracking-tight text-white mb-6">Crafting digital <br />masterpieces.</h3>
              <p className="text-neutral-400 text-lg font-light leading-relaxed mb-12">
                We bridge the gap between imagination and engineering. Let's build something that scales.
              </p>
              
              <div className="grid gap-12">
                <ContactItem icon={<FaEnvelope />} label="Email" value="info@dcreate.com" />
                <ContactItem icon={<FaWhatsapp />} label="WhatsApp" value="+94 72 553 5524" />
                <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Sri Lanka" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard value="24h" label="Fast Response" />
              <StatCard value="98%" label="Success Rate" />
            </div>
          </div>

          {/* Right Side: High-Performance Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="h-full rounded-[48px] border border-white/15 bg-white/[0.01] p-8 md:p-14 backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                <ModernInput label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                <ModernInput label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Optional" />
                <ModernInput label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                <ModernSelect label="Budget Range" name="budget" value={form.budget} onChange={handleChange} options={["$5k - $10k", "$10k - $25k", "$25k+"]} required />
              </div>

              <div className="mt-10">
                <ModernSelect label="Service Required" name="service" value={form.service} onChange={handleChange} options={["Web Development", "Mobile App", "UI/UX Design", "Full-stack"]} required />
              </div>

              <div className="mt-10">
                <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300 ml-1">The Mission</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What are we building together?"
                  className="mt-3 w-full resize-none rounded-3xl border border-white/20 bg-white/[0.02] p-6 text-white outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-neutral-600"
                  required
                />
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/15 pt-10">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-lg border border-white/20 bg-neutral-950 transition-all group-hover:border-white/40">
                    <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="peer absolute opacity-0 cursor-pointer" />
                    <div className="h-2.5 w-2.5 rounded-sm bg-white scale-0 transition-transform duration-300 peer-checked:scale-100" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase">Accept Privacy Policy</span>
                </label>

                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="group relative flex items-center justify-center gap-4 rounded-full bg-white px-12 py-5 text-sm font-bold text-black transition-all hover:bg-neutral-200 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Redirecting...
                    </span>
                  ) : (
                    <>
                      Submit Inquiry
                      <FaChevronRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-components remain the same
function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 p-4 h-20 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/10 transition-colors group">
      <div className="text-neutral-300 group-hover:text-white transition-colors text-lg">{icon}</div>
      <div>
        <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">{label}</p>
        <p className="text-sm font-medium text-neutral-200">{value}</p>
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[32px] border border-white/20 bg-white/[0.01] p-8 text-center backdrop-blur-xl">
      <p className="text-4xl font-bold text-white tracking-tighter mb-1">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{label}</p>
    </div>
  );
}

function ModernInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300 ml-1">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/20 bg-white/[0.02] px-6 py-4 text-sm text-white outline-none transition-all focus:border-white/20 focus:bg-white/[0.04] placeholder:text-neutral-500"
      />
    </div>
  );
}

function ModernSelect({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300 ml-1">{label}</label>
      <div className="relative">
        <select {...props} className="w-full appearance-none rounded-2xl border border-white/20 bg-white/[0.02] px-6 py-4 text-sm text-white/50 outline-none focus:border-white/20">
          <option value="" className="bg-black text-neutral-600">Choose Option</option>
          {options.map(opt => <option key={opt} value={opt} className="bg-black text-white/50">{opt}</option>)}
        </select>
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500 text-[10px]">▼</div>
      </div>
    </div>
  );
}