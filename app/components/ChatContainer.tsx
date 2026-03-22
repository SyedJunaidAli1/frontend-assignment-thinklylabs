"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";
import LoadingMessage from "./LoadingMessage";
import ChatMessage from "./ChatMessage";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong, traveler." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl h-[80vh] flex flex-col p-4 ">
      {/* Header */}
      <div className="mb-4 border-b border pb-2">
        <h1 className="text-lg font-semibold">Skyrim Chat</h1>
        <p className="text-sm text-neutral-400">Talk to a Whiterun Guard</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 px-1">
        {messages.length === 0 && <EmptyState />}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {loading && <LoadingMessage />}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />
    </Card>
  );
}
