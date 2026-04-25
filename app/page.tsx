export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          A different kind of <br />
          <span className="text-blue-500">Industrial Engineering student.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          Combining Data Analytics, PMO experience, and real-world leadership from IDF service.
          I build solutions, manage processes, and deliver results under pressure.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">
          <a
            href="https://www.linkedin.com/in/oridavid5"
            target="_blank"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/oridavid-web"
            target="_blank"
            className="px-5 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-4xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:scale-105 transition">
            <p className="text-3xl font-bold text-blue-400">760</p>
            <p className="text-gray-400 text-sm">Reserve Days</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:scale-105 transition">
            <p className="text-3xl font-bold text-purple-400">4yr</p>
            <p className="text-gray-400 text-sm">IDF Officer</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:scale-105 transition">
            <p className="text-3xl font-bold text-blue-400">PMO</p>
            <p className="text-gray-400 text-sm">Experience</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:scale-105 transition">
            <p className="text-3xl font-bold text-purple-400">Data</p>
            <p className="text-gray-400 text-sm">Analytics</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">About</h2>

        <p className="text-gray-400 leading-8">
          I'm an Industrial Engineering & Management student at HIT,
          combining academic knowledge with real-world experience from IDF service.
          <br /><br />
          Served as an officer in high-pressure environments, managing teams,
          operations, and logistics — while continuing academic studies in parallel.
          <br /><br />
          Today, I focus on Data Analytics and PMO roles — building structured processes,
          analyzing data, and improving decision-making in organizations.
        </p>

        <p className="mt-6 text-gray-400">
          Languages — Hebrew (native) · English (fluent) · Spanish (basic) · Arabic (basic)
        </p>
      </section>

    </main>
  );
}