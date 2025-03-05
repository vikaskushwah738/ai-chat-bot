'use client'
import { useState, useEffect, useRef, Children } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea} from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from "@ai-sdk/react"
import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon
} from "lucide-react"

import { Scada } from "next/font/google";
import HeroScetion from "@/components/HeroScetion";
import PriceSection from "@/components/PriceSection";
import KeyFeatures from "@/components/KeyFeatures";
import CTA from "@/components/CTA";
import { div, li, ul } from "framer-motion/client";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcons, setShowChatIcons] = useState(false);
  // const [isLoading, setIsLoading] =useState(false);
  const chatIconsRef = useRef<HTMLButtonElement>(null);

  const {
    handleSubmit,
    input,
    messages,
    handleInputChange,
    isLoading,
    stop,
    reload,
    error,
  } = useChat({ api: "/api/chatbot" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcons(true);
      } else {
        setIsChatOpen(false);
        setShowChatIcons(false);
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggalChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  const scrollRef =useRef<HTMLElement>(null);

  useEffect(()=>{
       if(scrollRef.current){
          scrollRef.current.scrollIntoView({behavior: 'smooth'})
       }
  },[messages])

  return (
    <main>
      <HeroScetion />
      <KeyFeatures />
      <PriceSection />
      <CTA />

      <AnimatePresence>
        {showChatIcons && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full"
          >
            <Button
              ref={chatIconsRef}
              onClick={toggalChat}
              className="rounded-full size-14 p-2 shadow-lg"
              size='icon'
            >
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[50%] md:w-[450px]"
          >
            <Card className="border-2">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle className="text-lg font-bold">
                  Chat with Akhila AI
                </CardTitle>
                <Button
                  onClick={toggalChat}
                  size='sm'
                  variant='ghost'
                  className="px-2 py-0">
                  <X className="size-4" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] pr-4">
                  {messages?.length === 0 && (
                    <div className="mt-32 text-gray-600 flex justify-center items-center gap-3 w-full">
                      NO message yet
                    </div>
                  )}
                  {/* {messages?.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={`inline-block rounded-lg ${message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                          }`}>
                          <ReactMarkdown
                          children={message.content}
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code: ({ node, inline, className, children, ...props }){
                              return inline ? (
                                <code
                                  {...props}
                                  className='bg-gray-200 px-1 rounded'
                                >{children}</code>
                              ) : (
                                <pre
                                  {...props}
                                  className='bg-gray-200 px-1 rounded'
                                >
                                  <code>{children}</code>
                                </pre>
                              )
                            },
                            ul: ({children}) =>(
                              <ul className="list-disc ml-4">{children}</ul>
                            ),
                            ol: ({children}) =>(
                              <li className="list-decimal ml-4">{children}</li>
                            )
                          }}
                        />  
                       
                      </div>
                    </div>
                  ))} */}
                  {messages?.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={`inline-block p-2 rounded-lg ${message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                          }`}
                      >
                        <ReactMarkdown
                          children={message.content}
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code: ({ node, inline, className, children, ...props }) => {
                              return inline ? (
                                <code {...props} className="bg-gray-200 px-1 rounded">
                                  {children}
                                </code>
                              ) : (
                                <pre {...props} className="bg-gray-200 px-1 rounded">
                                  <code>{children}</code>
                                </pre>
                              );
                            },
                            ul: ({ children }) => (
                              <ul className="list-disc ml-4">{children}</ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal ml-4">{children}</ol>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="w-full items-center flex justify-center gap-3">
                      <Loader2 className="animate-spin h-5 w-5 text-primary" />
                      <button
                        className="underline"
                        type="button"
                        onClick={() => stop()}>
                        abord
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="w-full items-center flex justify-center gap-3">
                      <h3>An error occure</h3>
                      <button
                        className="underline"
                        type="button"
                        onClick={() => reload()}>
                        abord
                      </button>
                    </div>
                  )}
                  <div ref={scrollRef}></div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full items-center space-x-2"
                >
                  <input
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1 focus:outline-none border-2 border-gray-600 p-[4px] rounded-lg"
                    placeholder="type you messaage here.."
                  />
                  <Button
                    type="submit"
                    className="size-9"
                    disabled={isLoading}
                    size="icon"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
