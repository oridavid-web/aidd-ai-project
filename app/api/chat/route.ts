export async function POST(req: Request) {
  try {
    const body = await req.json();

    // תומך גם ב-message וגם ב-prompt
    const message = body.message || body.prompt || "";

    if (!message.trim()) {
      return Response.json({
        message: "Please write something so I can help you 🙂"
      });
    }

    return Response.json({
      message:
        "Hi! I'm Ori's AI assistant. The AI service is currently disabled due to API credit limits, but the feature is implemented correctly."
    });

  } catch (error) {
    return Response.json({
      message: "Something went wrong. Please try again."
    });
  }
}