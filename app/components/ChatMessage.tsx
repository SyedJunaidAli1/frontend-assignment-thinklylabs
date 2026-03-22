import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatMessage({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";

  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <Avatar>
          <AvatarFallback>🛡️</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
          isUser ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-100"
        }`}
      >
        {content}
      </div>

      {isUser && (
        <Avatar>
          <AvatarFallback>🙂</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
