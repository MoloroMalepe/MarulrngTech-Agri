import React from "react";
import {
  Monitor,
  ShieldCheck,
  Sprout,
  ShoppingCart,
  Smartphone,
  Mail,
  HeartHandshake,
} from "lucide-react";

const App = () => {
  const companyName = "Maruleng Tech & Agri (Pty) Ltd";
  const whatsappNumber = "27763879307"; // Replace with yours
  const email = "thehornedone9@gmail.com";

  const openWhatsApp = (msg) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* --- MODERN NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-black text-emerald-800 tracking-tighter uppercase">
            {companyName}
          </span>
          <span className="text-[10px] font-bold text-sky-600 tracking-[0.2em]">
            HOEDSPRUIT • JOBURG
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <a href="#vision" className="hover:text-emerald-600 transition">
            Our Vision
          </a>
          <a href="#tech" className="hover:text-emerald-600 transition">
            Tech Training
          </a>
          <a href="#products" className="hover:text-emerald-600 transition">
            Heritage Shop
          </a>
        </div>
        <button
          onClick={() => openWhatsApp("How can I donate a laptop?")}
          className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-700 transition"
        >
          DONATE
        </button>
      </nav>

      {/* --- HERO SECTION (Combining Sun & Nature) --- */}
      <header className="pt-32 pb-20 px-6 bg-gradient-to-br from-sky-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-20 right-[-5%] w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            From the Olifants River to the Digital World
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
            Rooted in <span className="text-emerald-700">Heritage</span>,<br />
            Driven by{" "}
            <span className="text-sky-600 font-mono">Innovation.</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed mb-10">
            We are bridging the gap in Maruleng. Providing world-class IT
            training, AI education, and organic local heritage products—all
            while revitalizing the community poultry and marula projects founded
            by our ancestors.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() =>
                openWhatsApp("I want to learn more about ICT classes")
              }
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition"
            >
              Join the Tech Hub
            </button>
            <button
              onClick={() => openWhatsApp("I want to buy products")}
              className="border-2 border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition"
            >
              Shop Organic Heritage
            </button>
          </div>
        </div>
      </header>

      {/* --- STATS / QUICK INFO --- */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-yellow-400">100%</p>
            <p className="text-xs uppercase font-bold text-slate-400">
              Organic Herbs
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-sky-400">AI</p>
            <p className="text-xs uppercase font-bold text-slate-400">
              Focused Training
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-400">500ml</p>
            <p className="text-xs uppercase font-bold text-slate-400">
              Drink Sizes
            </p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">2017</p>
            <p className="text-xs uppercase font-bold text-slate-400">
              My IT Journey Began
            </p>
          </div>
        </div>
      </section>

      {/* --- FOUNDER'S JOURNEY --- */}
      <section id="vision" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: The Narrative */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-24 bg-emerald-600 rounded-full" />
              <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">
                The Dreamweaver's Path
              </h2>
              <h3 className="text-4xl font-black text-slate-900 leading-tight mb-6">
                From a Village in Maruleng <br />
                to the <span className="text-sky-600">World of Code</span>.
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  In 2017, I arrived at tertiary after Matric. While the world
                  was talking about 4IR, I was holding a computer mouse for the
                  very first time. I didn't know how to register my modules
                  because the IT world was a mystery to me.
                </p>
                <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-yellow-400 italic">
                  "I remember the frustration of curiosity meeting a lack of
                  opportunity. I realized then that my home village was missing
                  out on the future."
                </p>
                <p>
                  I made a promise to finish what I started in Gauteng. After
                  specializing in Software Development and building skills in
                  Systems Support and Entrepreneurship, I founded{" "}
                  <strong>Maruleng Tech & Agri (Pty) Ltd</strong> to ensure no
                  child in my village has to wait until university to learn what
                  a mouse is.
                </p>
              </div>
            </div>

            {/* Right Side: Visual Element */}
            <div className="relative bg-emerald-50 rounded-[2rem] p-8 md:p-12 border border-emerald-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-3xl mb-2">🖱️</span>
                    <p className="text-[10px] font-bold uppercase text-slate-400">
                      The 2017 Mouse
                    </p>
                    <p className="text-xs font-semibold text-slate-600">
                      Where it started
                    </p>
                  </div>
                  <div className="h-40 bg-emerald-700 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 text-center text-white">
                    <span className="text-3xl mb-2">💻</span>
                    <p className="text-[10px] font-bold uppercase text-emerald-200">
                      The Hub
                    </p>
                    <p className="text-xs font-semibold">Where we are going</p>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="h-40 bg-sky-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 text-center text-white">
                    <span className="text-3xl mb-2">🌳</span>
                    <p className="text-[10px] font-bold uppercase text-sky-200">
                      The Roots
                    </p>
                    <p className="text-xs font-semibold">Maruleng Heritage</p>
                  </div>
                  <div className="h-40 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-3xl mb-2">🐔</span>
                    <p className="text-[10px] font-bold uppercase text-slate-400">
                      Poultry
                    </p>
                    <p className="text-xs font-semibold">
                      Community Revitalization
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl transform rotate-3">
                <p className="text-emerald-900 font-black text-xl leading-none">
                  ICT & AGRI
                </p>
                <p className="text-emerald-800 text-[10px] font-bold uppercase tracking-tighter">
                  Unified Vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- TECH & SAFETY (3 CARD LAYOUT) --- */}
      <section id="tech" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase">
              Empowering The Youth
            </h2>
            <p className="text-slate-500 mt-2">
              Professional ICT skills adapted for the village.
            </p>
          </div>
          <div className="h-1 flex-1 bg-slate-100 mx-8 hidden md:block mb-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition">
            <Monitor className="text-sky-600 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Digital Literacy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Coding (Frontend), AI Career paths, and specialized Software
              Development training for those who have never used a mouse.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition">
            <ShieldCheck className="text-emerald-700 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Cyber Safety</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Protecting the community from scams, bank phishing, and spam. We
              teach elders and youth how to identify digital threats.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition">
            <Sprout className="text-yellow-600 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Agri-Tech Skills</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Integrating technology with farming. Rebuilding the community
              poultry business and optimizing the Marula harvest.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE HERITAGE SHOP (Clean Modern Layout) --- */}
      <section id="products" className="py-24 bg-emerald-950 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase">
              Sip & Snack Heritage
            </h2>
            <p className="text-emerald-300 mt-2">
              Organic | Affordable | Freshly Harvested
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                name: "The Maruleng Gold",
                sub: "Mokgope (Marula Beer)",
                icon: "🍶",
              },
              {
                name: "Vuka-Vuka Vitality",
                sub: "Men's Health Booster",
                icon: "⚡",
              },
              {
                name: "Bushveld Detox",
                sub: "Body System Cleansing",
                icon: "🍃",
              },
              {
                name: "Mopani Power-Snack",
                sub: "Dried Mashonja Protein",
                icon: "🐛",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition flex flex-col items-center text-center"
              >
                <span className="text-5xl mb-4">{product.icon}</span>
                <h4 className="text-lg font-bold text-yellow-400">
                  {product.name}
                </h4>
                <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest mb-4">
                  {product.sub}
                </p>
                <p className="text-xs text-emerald-100/60 mb-6">
                  Affordable organic goodness. Starts from 500ml.
                </p>
                <button
                  onClick={() =>
                    openWhatsApp(`I want to order ${product.name}`)
                  }
                  className="mt-auto text-xs font-bold border-b border-yellow-400 pb-1 hover:text-yellow-400 transition"
                >
                  ENQUIRE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900">
              {companyName}
            </h2>
            <p className="text-sm text-slate-500 mt-1">Reg: 2024/4645/07</p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <Mail className="text-slate-400 hover:text-emerald-600 cursor-pointer" />
              <Smartphone className="text-slate-400 hover:text-emerald-600 cursor-pointer" />
              <HeartHandshake className="text-slate-400 hover:text-emerald-600 cursor-pointer" />
            </div>
          </div>
          <div className="text-center md:text-right text-slate-600 text-sm">
            <p className="font-bold text-slate-900 mb-2">Location</p>
            <p>Hoedspruit, Limpopo</p>
            <p>Johannesburg, Gauteng</p>
            <p className="mt-4 text-[10px] uppercase tracking-widest font-bold">
              © 2026 Maruleng Tech & Agri
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
