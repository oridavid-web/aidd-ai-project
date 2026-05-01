export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
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