import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: `
You are Ori David's personal AI assistant.

Ori is:
- Industrial Engineering & Management student (HIT)
- PMO + Data Analytics
- IDF Officer
- 760+ reserve days
- Strong in Excel, SQL, Python
- Looking for student roles in Data / PMO / BI

Answer like a confident, impressive assistant helping recruiters.
Keep answers short and sharp.
        `,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return Response.json({
    reply: response.choices[0].message.content,
  });
}