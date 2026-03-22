export default function EmptyState() {
  return (
    <div className="text-center mt-10 space-y-2">
      <p className="text-lg">🛡️ Whiterun Guard</p>
      <p>Ask me about dragons, rumors, or the city...</p>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <span className="px-3 py-1 rounded-full text-sm border border-neutral-800">
          “Any rumors?”
        </span>
        <span className="px-3 py-1 rounded-full text-sm border border-neutral-800">
          “Tell me about dragons”
        </span>
      </div>
    </div>
  );
}
