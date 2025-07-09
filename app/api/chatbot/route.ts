import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { messageStater } from "@/lib/data"

const google = createGoogleGenerativeAI({
  apiKey: process.env.Google_API_Key || ""
});

export const runtime = 'edge';

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrommet = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: 'user',
    content: messageStater.content
  },
  // ...messages.map((message) =>({
  //   id: message.id || genrateId,
  //   role: message.role,
  //   content: message.content,
  // })),
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),

];


export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const stream = await streamText({
      model: google('gemini-1.5-pro'),
      messages: buildGoogleGenAIPrommet(messages),
      temperature: 0.7
    })
    return stream.toDataStreamResponse();

  } catch (error) {
    console.error("🔴 API ERROR:", error);
    return new Response(JSON.stringify({ error: "Stream failed", detail: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// export async function POST(request: Request) {
//   try {
//     const { messages } = await request.json();

//     // TEMP fallback to verify input structure
//     const last = messages[messages.length - 1]?.content || "Empty";

//     return new Response(
//       JSON.stringify({
//         role: "assistant",
//         content: `Static fallback response: "${last}"`,
//       }),
//       {
//         headers: { "Content-Type": "application/json" },
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("🔴 API ERROR:", error);
//     return new Response(JSON.stringify({ error: "Stream failed", detail: String(error) }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }








// // File: /app/api/chatbot/route.ts

// // export const runtime = 'edge';

// // export async function POST(req: Request) {
// //   const { messages } = await req.json();

// //   return new Response(
// //     JSON.stringify({
// //       role: 'assistant',
// //       content: `This is a simple test reply to "${messages?.[messages.length - 1]?.content}".`,
// //     }),
// //     {
// //       headers: { 'Content-Type': 'application/json' },
// //       status: 200,
// //     }
// //   );
// // }
