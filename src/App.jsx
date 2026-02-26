import React from "react";

const App = () => {
  const companyName = " Maruleng Tech & Agri (Pty) Ltd"; // Change to your final choice
  const regNumber = "2024/4645/07"; // Your actual CIPC Reg Number
  const whatsappNumber = "27763879307"; // Replace with your number
  const email = "thehornedone9@gmail.com";

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-yellow-200">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-emerald-900/95 backdrop-blur-sm text-white p-5 shadow-xl flex justify-between items-center border-b border-emerald-700">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-widest text-yellow-400 uppercase">
            {companyName}
          </span>
          <span className="text-[10px] text-emerald-300 font-mono tracking-tighter">
            OFFSPRING OF MARULENG
          </span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-semibold uppercase tracking-wide">
          <a href="#about" className="hover:text-sky-300 transition">
            Our Story
          </a>
          <a href="#services" className="hover:text-sky-300 transition">
            ICT & Safety
          </a>
          <a href="#heritage" className="hover:text-sky-300 transition">
            Heritage
          </a>
          <button
            onClick={() => openWhatsApp("How can I donate?")}
            className="bg-yellow-500 text-emerald-900 px-4 py-1 rounded hover:bg-white transition"
          >
            Donate
          </button>
        </div>
      </nav>
      {/* Hero: Sun, Sky, and Nature */}
      <section className="relative h-screen bg-linear-to-b from-sky-400 via-sky-300 to-emerald-50 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="text-xl md:text-2xl font-bold text-emerald-900 tracking-[0.2em] uppercase mb-2">
            Maruleng Tech & Agri (Pty) Ltd
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-6">
            Rooted in Heritage, <br />
            <span className="text-emerald-900 font-mono">Driven by Tech.</span>
          </h3>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp("Enquire about classes")}
              className="bg-emerald-800 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-2xl"
            >
              Start Learning
            </button>
            <button
              onClick={() => openWhatsApp("I want to buy Marula drinks")}
              className="bg-white/40 backdrop-blur-md border-2 border-emerald-800 text-emerald-800 px-10 py-4 rounded-full font-bold hover:bg-emerald-800 hover:text-white transition"
            >
              Shop Heritage
            </button>
          </div>
        </div>
      </section>
      {/* ICT Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-3xl shadow-lg border-b-8 border-sky-500">
            <div className="text-sky-500 text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-4">ICT Skills</h3>
            <p className="text-slate-600 leading-relaxed">
              Front-end coding, AI Career paths, and practical IT skills for the
              youth who grew up like I did—without a mouse.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-lg border-b-8 border-yellow-500">
            <div className="text-yellow-500 text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Cyber Safety</h3>
            <p className="text-slate-600 leading-relaxed">
              Protecting our community from bank scams and phishing. Identifying
              spam numbers and safe online banking.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-lg border-b-8 border-emerald-600">
            <div className="text-emerald-600 text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-4">Money Skills</h3>
            <p className="text-slate-600 leading-relaxed">
              Entrepreneurship, saving strategies, and online courses to help
              you build a sustainable future.
            </p>
          </div>
        </div>
      </section>
      {/* Heritage Section (The Kasi Taal part) */}
      {/* <section
        id="heritage"
        className="py-24 bg-emerald-900 text-white overflow-hidden relative"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-black mb-8 text-yellow-400 uppercase">
              Sip the Heritage
            </h3>
            <div className="space-y-6 text-xl text-emerald-100">
              <p>
                Siku-season ye-Marula is always on us! We specialize in Marula
                (Mokgope) and Baobab.
              </p>
              <div className="bg-emerald-800/50 p-6 rounded-2xl border-l-4 border-yellow-400">
                <p className="italic font-medium">
                  "Sinawo wonke ama-herbal drinks asiza indoda kwi-sexual health
                  (Vuka-Vuka). If ufuna i-cleansing or just a fresh Marula
                  drink, si-right lapha. Sizes qala ngo-500ml."
                </p>
              </div>
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hi, I'm interested in the herbal drinks and Marula products.",
                  )
                }
                className="inline-block mt-4 text-yellow-400 font-bold underline hover:text-white transition cursor-pointer"
              >
                Click to enquire via WhatsApp →
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-sky-200/10 rounded-full flex items-center justify-center border border-emerald-700">
              <span className="text-9xl">🌳</span>
            </div>
          </div>
        </div>
      </section>
 */}
      <section
        id="heritage"
        className="py-24 bg-emerald-900 text-white relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-yellow-400 uppercase tracking-tight">
              Sip & Snack Heritage
            </h3>
            <p className="text-emerald-200 mt-2 text-lg">
              Organic. High-Protein. Village Fresh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1: Marula Beer */}
            <div className="bg-emerald-800/40 p-6 rounded-3xl border border-emerald-700 hover:border-yellow-400 transition group">
              <div className="text-4xl mb-4 group-hover:bounce">🍶</div>
              <h4 className="text-xl font-bold text-yellow-400 mb-1">
                The Maruleng Gold
              </h4>
              <p className="text-xs text-emerald-300 mb-3 font-mono">
                Marula Beer (Mokgope)
              </p>
              <p className="text-sm text-slate-300">
                Pure, sun-ripened Marula fermentation. A true village classic.
              </p>
            </div>

            {/* Product 2: Men's Booster */}
            <div className="bg-emerald-800/40 p-6 rounded-3xl border border-emerald-700 hover:border-sky-400 transition group">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-sky-300 mb-1">
                Vuka-Vuka Vitality
              </h4>
              <p className="text-xs text-emerald-300 mb-3 font-mono">
                Men's Herbal Energy
              </p>
              <p className="text-sm text-slate-300">
                Natural stamina and strength support using local organic herbs.
              </p>
            </div>

            {/* Product 3: Cleansing Juice */}
            <div className="bg-emerald-800/40 p-6 rounded-3xl border border-emerald-700 hover:border-white transition group">
              <div className="text-4xl mb-4">🍃</div>
              <h4 className="text-xl font-bold text-white mb-1">
                Bushveld Detox
              </h4>
              <p className="text-xs text-emerald-300 mb-3 font-mono">
                System Cleansing Juice
              </p>
              <p className="text-sm text-slate-300">
                A deep herbal flush to reset your body and improve digestion.
              </p>
            </div>

            {/* Product 4: Mopani Worms */}
            <div className="bg-emerald-800/40 p-6 rounded-3xl border border-yellow-500 hover:bg-emerald-800 transition group relative overflow-hidden">
              <div className="absolute -top-2 -right-2 bg-yellow-500 text-emerald-900 text-[10px] font-black px-3 py-2 rotate-12 uppercase">
                Full Protein
              </div>
              <div className="text-4xl mb-4">🐛</div>
              <h4 className="text-xl font-bold text-yellow-400 mb-1">
                Bushveld Power-Snack
              </h4>
              <p className="text-xs text-emerald-300 mb-3 font-mono">
                Organic Dried Mashonja
              </p>
              <p className="text-sm text-slate-300">
                High-protein, organic Mopani worms. Clean, crispy, and sun-dried
                for health.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() =>
                openWhatsApp(
                  "I'm interested in the Bushveld Power-Snack (Mashonja) and other heritage products.",
                )
              }
              className="bg-yellow-500 text-emerald-900 px-10 py-4 rounded-full font-black hover:bg-white transition shadow-2xl uppercase tracking-widest"
            >
              Enquire & Order via WhatsApp
            </button>
          </div>
        </div>
      </section>{" "}
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-xl">{companyName}</h4>
            <p className="text-sm font-mono mt-2">{regNumber}</p>
            <p className="mt-4">Hoedspruit, Limpopo | Johannesburg, Gauteng</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white font-semibold">Contact Us</p>
            <p>{email}</p>
            <button
              onClick={() => openWhatsApp("Hello, I have a question.")}
              className="mt-4 bg-white/5 px-6 py-2 rounded-full border border-slate-700 hover:bg-white/10 transition"
            >
              WhatsApp Support
            </button>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-slate-900 text-xs uppercase tracking-widest">
          © 2026 {companyName}. Built for the People of Maruleng.
        </div>
      </footer>
    </div>
  );
};

export default App;
