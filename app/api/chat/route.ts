export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = body.message || body.prompt || body.input || "";

  const demoAnswer =
    "Hi! I'm Ori's AI assistant. Ori is an Industrial Engineering & Management student at HIT, with experience in PMO, Data Analytics, Excel, SQL, Python, operations, and IDF leadership. The live AI API is currently disabled due to credit limits, but the AI feature structure is implemented successfully.";

  if (!userMessage.trim()) {
    return Response.json({
      reply: "Please write something so I can help you 🙂",
      response: "Please write something so I can help you 🙂",
      message: "Please write something so I can help you 🙂"
    });
  }

  return Response.json({
    reply: demoAnswer,
    response: demoAnswer,
    message: demoAnswer
  });
}