import { streamText, Message } from "ai";
import {createGoogleGenerativeAI} from "@ai-sdk/google"
import { messageStater } from "@/lib/data"
import { Content } from "next/font/google";

const google = createGoogleGenerativeAI({
 apiKey: process.env.Google_API_Key || ""
});

export const runtime= 'edge';

const generateId =() => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrommet=(messages: Message[]) :Message[] =>[
    {
        id: generateId(),
        role:'user',
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


export async function POST(request: Request){
    const {messages} =await request.json();
    const stream =await streamText({
      model: google('gemini-1.5-pro'),  
      messages: buildGoogleGenAIPrommet(messages),
      temperature: 0.7
    })
    return stream?.toDataStreamResponse();
}