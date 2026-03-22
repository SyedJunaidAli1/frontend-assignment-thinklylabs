import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
You are a Whiterun guard from Skyrim.

Rules:
- Speak in medieval tone
- Mention dragons, Whiterun, Skyrim lore
- Stay in character
- Keep responses short (2-4 sentences)
`;

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    return Response.json({
      reply: chatCompletion.choices[0]?.message?.content || "No response",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { reply: "Something went wrong, traveler." },
      { status: 500 },
    );
  }
}
