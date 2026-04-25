export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-24">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          OD
        </div>
        <div className="hidden md:flex gap-6 text-gray-400 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto mb-24">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">PORTFOLIO</p>
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          Ori David
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            PMO & Data driven.
          </span>
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-2xl leading-relaxed">
          Industrial Engineering & Management student at HIT, combining data analytics,
          PMO experience, and real-world leadership from IDF service.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="https://www.linkedin.com/in/oridavid5" target="_blank" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-80 transition">
            LinkedIn
          </a>
          <a href="https://github.com/oridavid-web" target="_blank" className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition">
            GitHub
          </a>
          <a href="mailto:Oriri8000@gmail.com" className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black transition">
            Email
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["760", "Reserve Days"],
            ["4yr", "IDF Officer"],
            ["PMO", "Experience"],
            ["Data", "Analytics"],
          ].map(([num, label]) => (
            <div key={label} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center hover:scale-105 hover:border-purple-500 transition">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">{num}</p>
              <p className="text-gray-400 mt-2 tracking-widest text-sm uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto mb-28 border-l-4 border-purple-500 pl-6">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          A different kind of
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> PMO & Data student.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-5">
          I combine academic knowledge in Industrial Engineering & Management with operational experience from the IDF.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-5">
          Experienced in PMO, data analysis, planning, Excel tracking tools, reporting, and supporting decision-making in fast-paced environments.
        </p>
        <p className="text-gray-400 text-lg">
          <b className="text-white">Languages</b> — Hebrew (native) · English (professional) · Spanish (basic) · Arabic (basic)
        </p>
      </section>

      <section id="projects" className="max-w-5xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">PROJECTS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Things I’ve
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> built and shipped.</span>
        </h2>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-purple-900 bg-zinc-950 p-8 hover:border-purple-400 transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Personal Portfolio Website</h3>
              <span className="text-green-400 border border-green-700 px-3 py-1 rounded-full text-sm">Live</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A responsive personal portfolio built with Next.js, GitHub and Vercel as part of the AIDD course.
            </p>
            <p className="text-blue-400 mt-5">Next.js · GitHub · Vercel · AI-assisted development</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4">Operational Data Tracking Tools</h3>
            <p className="text-gray-400 leading-relaxed">
              Excel-based tracking tools for manpower, logistics and operational execution, supporting planning accuracy and data-driven decisions.
            </p>
            <p className="text-purple-400 mt-5">Excel · Pivot Tables · VLOOKUP · Reporting · Operations</p>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-5xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">EXPERIENCE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Where I’ve
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> worked and led.</span>
        </h2>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-2xl font-bold">Active Reserve Duty — Operations & Data | IDF</h3>
            <p className="text-gray-500 mt-1">2023–2026</p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Built Excel tools, analyzed manpower and logistics data, generated reports, and supported planning and execution in dynamic environments.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-2xl font-bold">Deputy Company Commander | Givati Brigade</h3>
            <p className="text-gray-500 mt-1">2021–2023</p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Led planning and execution of operational activities for ~150 personnel, coordinated stakeholders, and improved operational performance.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-2xl font-bold">Logistics Officer | Givati Brigade</h3>
            <p className="text-gray-500 mt-1">2020–2021</p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Managed logistics processes, built tracking systems, and supported resource allocation across multiple battalions.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="max-w-5xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">EDUCATION</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Credentials &
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> achievements.</span>
        </h2>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 mb-5">
          <h3 className="text-2xl font-bold">B.Sc. Industrial Engineering & Management</h3>
          <p className="text-gray-400 mt-2">HIT — Holon Institute of Technology</p>
          <p className="text-blue-400 mt-2">GPA: 88 · Expected 2027</p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-bold">AI-Driven Development Course</h3>
          <p className="text-gray-400 mt-2">Focused on AI tools, workflow automation and process efficiency.</p>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto text-center pb-20">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">CONTACT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s connect.</h2>
        <p className="text-gray-400 mb-8">Open to student roles in PMO, Data, BI, AI, Operations and Analytics.</p>
        <a href="mailto:Oriri8000@gmail.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 font-bold hover:opacity-80 transition">
          Contact Me
        </a>
      </section>
      <section className="max-w-5xl mx-auto mb-32">
  <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">ASK THE AI</p>

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Curious about
    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Ori?</span>
  </h2>

  <p className="text-gray-400 mb-8 max-w-2xl">
    An AI assistant trained on my profile. Ask about my experience, projects, or anything you'd ask in an interview.
  </p>

  <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950">
    
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <p className="font-semibold">Ori's AI</p>
      </div>
      <p className="text-gray-500 text-sm">Powered by AI</p>
    </div>

    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
        ✨
      </div>
      <p className="text-gray-400">Ask me anything about Ori.</p>
    </div>

    <div className="flex gap-3 mt-6">
      <input
        placeholder="Ask about Ori..."
        className="flex-1 bg-black border border-zinc-800 rounded-full px-5 py-3 text-sm outline-none"
      />
      <button className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
        ➤
      </button>
    </div>

  </div>
</section>
    </main>
  );
}