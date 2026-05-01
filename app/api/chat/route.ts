export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = body.message || body.prompt || body.input || "";

  const msg = userMessage.toLowerCase();

  let reply = "";

  if (!userMessage.trim()) {
    reply = "Please write something so I can help you 🙂";
  } else if (msg.includes("skill") || msg.includes("skills")) {
    reply =
      "Ori has strong skills in Excel, SQL, Python, Data Analysis, PMO, operations management, and AI-powered development.";
  } else if (msg.includes("experience")) {
    reply =
      "Ori has experience in PMO, Data Analytics, operations, and IDF leadership, including planning, coordination, and managing complex tasks under pressure.";
  } else if (msg.includes("project") || msg.includes("projects")) {
    reply =
      "Ori's projects include an AI-powered personal portfolio website, data analysis work, and academic projects related to Industrial Engineering & Management.";
  } else if (msg.includes("education") || msg.includes("hit")) {
    reply =
      "Ori is an Industrial Engineering & Management student at HIT, with academic experience in Python, SQL, data analysis, and business processes.";
  } else {
    reply =
      "Hi! I'm Ori's AI assistant. You can ask me about Ori's skills, experience, projects, education, or career interests.";
  }

  return Response.json({
    reply,
    response: reply,
    message: reply,
  });
}