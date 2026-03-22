export default function EmptyState() {
  return (
    <div className="text-center text-neutral-400 mt-10 space-y-2">
      <p className="text-lg">🛡️ Whiterun Guard</p>
      <p>Ask me about dragons, rumors, or the city...</p>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm">
          “Any rumors?”
        </span>
        <span className="bg-neutral-800 px-3 py-1 rounded-full text-sm">
          “Tell me about dragons”
        </span>
      </div>
    </div>
  );
}
