import { type CoreMessage, streamText } from "ai"
import { createDeepSeek } from "@ai-sdk/deepseek"

// Create a custom DeepSeek instance with the provided base URL
const deepseek = createDeepSeek({
  baseURL: process.env.DEEPSEEK_BASE_URL,
  apiKey: process.env.DEEPSEEK_API_KEY,
})


export async function POST(req: Request) {
  try {
    // Validate request body
    const { messages }: { messages: CoreMessage[] } = await req.json()
    //debug
    // console.log("🔴🔴Incoming messages:", messages);

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 })
    }

    // Validate environment variables
    if (!process.env.DEEPSEEK_BASE_URL || !process.env.DEEPSEEK_API_KEY) {
      //debug
      //  console.error("Missing DeepSeek configuration")
      return new Response("Server configuration error", { status: 500 })
    }

    const result = streamText({
      model: deepseek("deepseek/deepseek-r1-0528:free"),
      messages,
      system:
        "You are a helpful AI assistant. Before providing an answer, think through your response and wrap your thinking process in <think> tags. Then provide your final answer after the closing </think> tag.",
    })

    //console.log("🔴🔴 streamText result initialized", result.toDataStreamResponse())

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}


// import { streamText, Message } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google"
// import { messageStater } from "@/lib/data"

// const google = createGoogleGenerativeAI({
//   apiKey: process.env.Google_API_Key || ""
// });

// export const runtime = 'edge';

// const generateId = () => Math.random().toString(36).slice(2, 15);

// const buildGoogleGenAIPrommet = (messages: Message[]): Message[] => [
//   {
//     id: generateId(),
//     role: 'user',
//     content: messageStater.content
//   },
//   // ...messages.map((message) =>({
//   //   id: message.id || genrateId,
//   //   role: message.role,
//   //   content: message.content,
//   // })),
//   ...messages.map((message) => ({
//     id: message.id || generateId(),
//     role: message.role,
//     content: message.content,
//   })),

// ];


// export async function POST(request: Request) {
//   try {
//     const { messages } = await request.json();
//     const stream = await streamText({
//       model: google('gemini-1.5-pro'),
//       messages: buildGoogleGenAIPrommet(messages),
//       temperature: 0.7
//     })
//     return stream.toDataStreamResponse();

//   } catch (error) {
//     console.error("🔴 API ERROR:", error);
//     return new Response(JSON.stringify({ error: "Stream failed", detail: String(error) }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
