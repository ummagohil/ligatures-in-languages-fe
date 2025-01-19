return (
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="w-full p-2 rounded bg-[#B24703] text-[#F9F2D6] placeholder-[#F9F2D6]/70"
    placeholder="Enter text..."
  />
);
