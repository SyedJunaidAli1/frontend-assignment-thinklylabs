"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mt-4">
      <Input
        placeholder="Ask about dragons..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}
