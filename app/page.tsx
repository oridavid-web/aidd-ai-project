export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8 font-sans">
      <nav className="flex justify-between items-center mb-20">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          OD
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto mb-28 animate-pulse">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">PORTFOLIO</p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Ori David
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Data & AI driven.
          </span>
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-2xl leading-relaxed">
          Industrial Engineering & Management student at HIT, focused on data analysis,
          automation, operations, and turning complex information into practical decisions.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="https://www.linkedin.com/in/oridavid5" target="_blank" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-blue-400 transition">
            LinkedIn
          </a>
          <a href="https://github.com/oridavid-web" target="_blank" className="px-5 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition">
            GitHub
          </a>
          <a href="mailto:Oriri8000@gmail.com" className="px-5 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition">
            Email
          </a>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto mb-28 border-l-4 border-blue-500 pl-6">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          A different kind of
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> data student.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-5">
          I combine academic knowledge in Industrial Engineering & Management with real operational experience from the IDF.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          My background includes building Excel-based tracking tools, analyzing manpower and logistics data,
          generating reports, and supporting decision-making in dynamic, high-pressure environments.
        </p>
      </section>

      <section id="projects" className="max-w-4xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">PROJECTS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Things I’ve
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> built and shipped.</span>
        </h2>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-blue-900 bg-zinc-950 p-8 hover:border-blue-400 transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Personal Portfolio Website</h3>
              <span className="text-green-400 border border-green-700 px-3 py-1 rounded-full text-sm">Live</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A responsive portfolio website built with Next.js, GitHub, and Vercel as part of the AIDD course.
            </p>
            <p className="text-blue-400 mt-5">Next.js · GitHub · Vercel · AI-assisted development</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-purple-400 transition">
            <h3 className="text-2xl font-bold mb-4">Operational Data Tracking Tools</h3>
            <p className="text-gray-400 leading-relaxed">
              Excel-based tools for tracking manpower, logistics, and operational execution, supporting planning accuracy and decision-making.
            </p>
            <p className="text-purple-400 mt-5">Excel · Pivot Tables · VLOOKUP · Reporting</p>
          </div>
        </div>
      </section>

      <section id="education" className="max-w-4xl mx-auto mb-28">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">EDUCATION</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Credentials &
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> achievements.</span>
        </h2>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 mb-5">
          <h3 className="text-2xl font-bold">B.Sc. Industrial Engineering & Management</h3>
          <p className="text-gray-400 mt-2">HIT — Holon Institute of Technology</p>
          <p className="text-blue-400 mt-2">GPA: 88 · Expected 2027</p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-bold">AI-Driven Development Course</h3>
          <p className="text-gray-400 mt-2">
            Focused on AI tools, workflow automation, and process efficiency.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto text-center pb-20">
        <p className="text-blue-400 font-bold tracking-[0.3em] mb-4">CONTACT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s connect.</h2>
        <p className="text-gray-400 mb-8">Open to student roles in Data, BI, AI, Operations and Analytics.</p>
        <a href="mailto:Oriri8000@gmail.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold hover:opacity-80 transition">
          Contact Me
        </a>
      </section>
    </main>
  );
}