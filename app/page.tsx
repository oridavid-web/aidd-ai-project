export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      
      <h1 className="text-4xl font-bold">
        Ori David
      </h1>

      <p className="text-lg text-gray-500">
        Industrial Engineering & Management Student  
        | Data & Analytics Enthusiast
      </p>

      <div className="flex gap-4 mt-4">
        
        <a
          href="https://www.linkedin.com/in/oridavid5"
          target="_blank"
          className="underline"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/oridavid-web"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>

        <a
          href="mailto:youremail@gmail.com"
          className="underline"
        >
          Email
        </a>

      </div>

    </main>
  );
}