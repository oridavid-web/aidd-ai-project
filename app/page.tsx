"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setReply(data.reply || data.response || data.message || "Something went wrong. Please try again.");
    } catch {
      setReply("AI is currently unavailable.");
    }

    setLoading(false);
  };

  const gradientText =
    "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent";

  const card =
    "rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7 hover:border-purple-500 hover:scale-[1.02] transition duration-300";

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8 overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
      `}</style>

      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-24 fade-up">
        <div className={`text-2xl font-extrabold ${gradientText}`}>OD</div>

        <div className="hidden md:flex gap-8 text-gray-400 text-base">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#ai" className="hover:text-white transition">AI</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto mb-28 fade-up">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-8 text-base">
          PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Ori David
          <br />
          <span className={gradientText}>PMO & Data driven.</span>
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl leading-relaxed">
          Industrial Engineering & Management student at HIT, combining data
          analytics, PMO experience, and real-world leadership from IDF service.
        </p>

        <div className="flex flex-wrap gap-5 mt-8">
          <a
            href="https://www.linkedin.com/in/oridavid5"
            target="_blank"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/oridavid-web"
            target="_blank"
            className="px-7 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:Oriri8000@gmail.com"
            className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black hover:scale-105 transition"
          >
            Email
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["760", "Reserve Days"],
            ["4yr", "IDF Officer"],
            ["PMO", "Experience"],
            ["Data", "Analytics"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center hover:border-purple-500 hover:scale-105 transition"
            >
              <p className={`text-4xl font-extrabold ${gradientText}`}>{num}</p>
              <p className="text-gray-400 mt-3 tracking-widest text-sm uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="max-w-7xl mx-auto mb-28 border-l-4 border-purple-500 pl-8"
      >
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          ABOUT
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          A different kind of{" "}
          <span className={gradientText}>PMO & Data student.</span>
        </h2>

        <p className="text-gray-400 text-xl leading-relaxed mb-6">
          I combine academic knowledge in Industrial Engineering & Management
          with operational experience from the IDF.
        </p>

        <p className="text-gray-400 text-xl leading-relaxed mb-6">
          Experienced in PMO, data analysis, planning, Excel tracking tools,
          reporting, and supporting decision-making in fast-paced environments.
        </p>

        <p className="text-gray-400 text-lg">
          <b className="text-white">Languages</b> — Hebrew (native) · English
          (professional) · Spanish (basic) · Arabic (basic)
        </p>
      </section>

      <section id="projects" className="max-w-7xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
          Things {"I've"} <span className={gradientText}>built and shipped.</span>
        </h2>

        <div className="grid gap-8">
          <div className={`${card} border-purple-900`}>
            <div className="flex justify-between items-center mb-6 gap-4">
              <h3 className="text-3xl font-bold">Personal Portfolio Website</h3>
              <span className="text-green-400 border border-green-700 px-4 py-2 rounded-full text-sm">
                Live
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              A responsive personal portfolio built with Next.js, GitHub and
              Vercel as part of the AIDD course.
            </p>

            <p className="text-blue-400 text-lg mt-6">
              Next.js · GitHub · Vercel · AI-assisted development
            </p>
          </div>

          <div className={card}>
            <h3 className="text-3xl font-bold mb-6">
              Operational Data Tracking Tools
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Excel-based tracking tools for manpower, logistics and operational
              execution, supporting planning accuracy and data-driven decisions.
            </p>

            <p className="text-purple-400 text-lg mt-6">
              Excel · Pivot Tables · VLOOKUP · Reporting · Operations
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          EXPERIENCE
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
          Where {"I've"} <span className={gradientText}>worked and led.</span>
        </h2>

        <div className="grid gap-8">
          {[
            [
              "Active Reserve Duty — Operations & Data | IDF",
              "2023-2026",
              "Built Excel tools, analyzed manpower and logistics data, generated reports, and supported planning and execution in dynamic environments.",
            ],
            [
              "Deputy Company Commander | Givati Brigade",
              "2021-2023",
              "Led planning and execution of operational activities for ~150 personnel, coordinated stakeholders, and improved operational performance.",
            ],
            [
              "Logistics Officer | Givati Brigade",
              "2020-2021",
              "Managed logistics processes, built tracking systems, and supported resource allocation across multiple battalions.",
            ],
          ].map(([title, years, description], index) => (
            <div
              key={title}
              className={`${card} ${index === 1 ? "border-purple-700" : ""}`}
            >
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="text-gray-500 text-lg mt-3">{years}</p>
              <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="max-w-7xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
          Credentials & <span className={gradientText}>achievements.</span>
        </h2>

        <div className={`${card} mb-8`}>
          <h3 className="text-3xl font-bold">
            B.Sc. Industrial Engineering & Management
          </h3>
          <p className="text-gray-400 text-lg mt-5">
            HIT — Holon Institute of Technology
          </p>
          <p className="text-blue-400 text-lg mt-5">GPA: 88 · Expected 2027</p>
        </div>

        <div className={card}>
          <h3 className="text-3xl font-bold">AI-Driven Development Course</h3>
          <p className="text-gray-400 text-lg mt-5">
            Focused on AI tools, workflow automation and process efficiency.
          </p>
        </div>
      </section>

      <section id="ai" className="max-w-7xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          ASK THE AI
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Curious about <span className={gradientText}>Ori?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-4xl leading-relaxed">
          An AI assistant trained on my profile. Ask about my experience,
          projects, or anything you would ask in an interview.
        </p>

        <div className="border border-zinc-800 rounded-3xl bg-zinc-950 p-8 hover:border-purple-500 transition">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="font-bold text-lg">{"Ori's AI"}</p>
            </div>
            <p className="text-gray-500 text-base">Powered by OpenAI</p>
          </div>

          <div className="min-h-56 border-y border-zinc-800 flex items-center justify-center text-center py-10">
            {!reply && !loading && (
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-5 text-2xl">
                  ✨
                </div>
                <p className="text-gray-400 text-lg">Ask me anything about Ori.</p>
              </div>
            )}

            {loading && (
  <p className="text-purple-400 text-lg animate-pulse">
    AI is thinking...
  </p>
)}

            {reply && (
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                {reply}
              </p>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ori..."
              className="flex-1 bg-black border border-zinc-800 rounded-full px-6 py-4 text-base outline-none focus:border-purple-500 transition"
            />

            <button
              onClick={askAI}
              disabled={loading}
              className="px-7 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold hover:scale-105 transition disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto text-center pb-24">
        <p className="text-blue-400 font-bold tracking-[0.45em] mb-5">
          CONTACT
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-7">
          {"Let's connect."}
        </h2>

        <p className="text-gray-400 text-lg mb-8">
          Open to student roles in PMO, Data, BI, AI, Operations and Analytics.
        </p>

        <a
          href="mailto:Oriri8000@gmail.com"
          className="px-9 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 font-bold hover:scale-105 transition inline-block"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}